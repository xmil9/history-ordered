import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import * as SQLite from 'expo-sqlite';

import { StatusView } from '@/components/StatusView';

export type Score = {
  correct: number;
  total: number;
};

export type RunScores = Record<string, Score>;

type ScorebookValue = {
  db: SQLiteDatabase;
  best: Record<string, Score>;
  reloadBest: () => Promise<void>;
};

const ScorebookContext = createContext<ScorebookValue | null>(null);

const MIGRATION = `
CREATE TABLE IF NOT EXISTS pack_best (
  pack_id TEXT PRIMARY KEY NOT NULL,
  correct INTEGER NOT NULL,
  total INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS pack_run (
  pack_id TEXT PRIMARY KEY NOT NULL,
  scores_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
`;

async function migrate(db: SQLiteDatabase): Promise<void> {
  await db.execAsync(MIGRATION);
}

function messageOf(error: unknown): string {
  if (error instanceof Error && error.message.trim()) return error.message.trim();
  return 'The scorebook could not be opened.';
}

async function loadBest(database: SQLiteDatabase): Promise<Record<string, Score>> {
  const rows = await database.getAllAsync<{ pack_id: string; correct: number; total: number }>(
    'SELECT pack_id, correct, total FROM pack_best',
  );
  const next: Record<string, Score> = {};
  for (const row of rows) {
    next[row.pack_id] = { correct: row.correct, total: row.total };
  }
  return next;
}

export function ScorebookProvider({ children }: { children: ReactNode }) {
  const [db, setDb] = useState<SQLiteDatabase | null>(null);
  const [best, setBest] = useState<Record<string, Score>>({});
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setError(null);
    setDb(null);
    openScorebook()
      .then(async (database) => {
        const scores = await loadBest(database);
        if (!active) return;
        setBest(scores);
        setDb(database);
      })
      .catch((openError: unknown) => {
        if (!active) return;
        setError(messageOf(openError));
      });
    return () => {
      active = false;
    };
  }, [attempt]);

  const reloadBest = useCallback(async () => {
    if (!db) return;
    setBest(await loadBest(db));
  }, [db]);

  const value = useMemo(() => (db ? { db, best, reloadBest } : null), [best, db, reloadBest]);

  if (error) {
    return (
      <StatusView
        kicker="Scorebook"
        title="Scores could not be opened"
        body="Ordered keeps a best run on this device with a local database. Nothing was saved, and nothing was sent anywhere."
        detail={error}
        actionLabel="Try again"
        onAction={() => setAttempt((current) => current + 1)}
      />
    );
  }

  if (!value) {
    return <StatusView kicker="Scorebook" title="Opening the scorebook" body="Reading saved runs from this device." />;
  }

  return <ScorebookContext.Provider value={value}>{children}</ScorebookContext.Provider>;
}

async function openScorebook(): Promise<SQLiteDatabase> {
  const database = await SQLite.openDatabaseAsync('sequence.db');
  await migrate(database);
  return database;
}

export function useScorebook(): ScorebookValue {
  const value = useContext(ScorebookContext);
  if (!value) {
    throw new Error('useScorebook must be used after the scorebook is open');
  }
  return value;
}

export async function readRun(db: SQLiteDatabase, packId: string): Promise<RunScores> {
  const row = await db.getFirstAsync<{ scores_json: string }>('SELECT scores_json FROM pack_run WHERE pack_id = ?', packId);
  if (!row) return {};
  try {
    const parsed: unknown = JSON.parse(row.scores_json);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return parsed as RunScores;
  } catch {
    return {};
  }
}

export async function clearRun(db: SQLiteDatabase, packId: string): Promise<void> {
  await db.runAsync('DELETE FROM pack_run WHERE pack_id = ?', packId);
}

export async function recordRound(
  db: SQLiteDatabase,
  packId: string,
  roundId: string,
  correct: number,
  total: number,
  roundIds: string[],
): Promise<{ run: RunScores; complete: boolean; isNewBest: boolean; best: Score | null }> {
  const run = await readRun(db, packId);
  run[roundId] = { correct, total };
  const now = Date.now();
  await db.runAsync(
    `INSERT INTO pack_run (pack_id, scores_json, updated_at) VALUES (?, ?, ?)
     ON CONFLICT(pack_id) DO UPDATE SET scores_json = excluded.scores_json, updated_at = excluded.updated_at`,
    packId,
    JSON.stringify(run),
    now,
  );

  const complete = roundIds.every((id) => run[id]);
  if (!complete) {
    const existing = await db.getFirstAsync<Score>('SELECT correct, total FROM pack_best WHERE pack_id = ?', packId);
    return { run, complete: false, isNewBest: false, best: existing ?? null };
  }

  const correctSum = roundIds.reduce((sum, id) => sum + run[id].correct, 0);
  const totalSum = roundIds.reduce((sum, id) => sum + run[id].total, 0);
  const previous = await db.getFirstAsync<Score>('SELECT correct, total FROM pack_best WHERE pack_id = ?', packId);
  const fraction = correctSum / totalSum;
  const previousFraction = previous ? previous.correct / previous.total : -1;
  const isNewBest = fraction > previousFraction;
  if (isNewBest) {
    await db.runAsync(
      `INSERT INTO pack_best (pack_id, correct, total, updated_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(pack_id) DO UPDATE SET correct = excluded.correct, total = excluded.total, updated_at = excluded.updated_at`,
      packId,
      correctSum,
      totalSum,
      now,
    );
    return { run, complete: true, isNewBest: true, best: { correct: correctSum, total: totalSum } };
  }
  return { run, complete: true, isNewBest: false, best: previous };
}

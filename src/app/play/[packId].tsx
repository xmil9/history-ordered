import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useFontChoice } from '@/components/fonts';
import { PhoneFrame } from '@/components/PhoneFrame';
import { ReorderableList } from '@/components/ReorderableList';
import { StatusView } from '@/components/StatusView';
import { getPack } from '@/content/packs';
import type { Fact, Pack } from '@/content/types';
import { clearRun, readRun, recordRound, useScorebook, type RunScores, type Score } from '@/db/scorebook';
import { formatFraction, grade, shuffleFacts, sortedFacts } from '@/lib/order';
import { theme } from '@/theme';

function leaveRound() {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}

export default function PlayScreen() {
  const params = useLocalSearchParams<{ packId: string }>();
  const packId = Array.isArray(params.packId) ? params.packId[0] : params.packId;
  const pack = getPack(packId);
  const fonts = useFontChoice();
  const insets = useSafeAreaInsets();
  const { db, best, reloadBest } = useScorebook();

  const [run, setRun] = useState<RunScores | null>(null);
  const [runError, setRunError] = useState<string | null>(null);
  const [runAttempt, setRunAttempt] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);
  const [summary, setSummary] = useState(false);
  const [arranged, setArranged] = useState<Fact[]>([]);
  const [result, setResult] = useState<boolean[] | null>(null);
  const [retry, setRetry] = useState(0);
  const [checking, setChecking] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [booted, setBooted] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (!pack) return;
    let active = true;
    setRun(null);
    setRunError(null);
    setBooted(false);
    readRun(db, pack.id)
      .then((scores) => {
        if (active) setRun(scores);
      })
      .catch((error: unknown) => {
        if (!active) return;
        setRunError(error instanceof Error ? error.message : 'The saved run could not be read.');
      });
    return () => {
      active = false;
    };
  }, [db, pack, runAttempt]);

  useEffect(() => {
    if (!pack || !run || booted) return;
    const firstOpen = pack.rounds.findIndex((round) => !run[round.id]);
    if (firstOpen === -1) {
      setSummary(true);
      setRoundIndex(0);
    } else {
      setSummary(false);
      setRoundIndex(firstOpen);
    }
    setBooted(true);
  }, [booted, pack, run]);

  useEffect(() => {
    if (!pack || !booted || summary) return;
    setArranged(shuffleFacts(pack.rounds[roundIndex].facts));
    setResult(null);
    setNotice(null);
    setSaveError(null);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [booted, pack, roundIndex, retry, summary]);

  if (!pack) {
    return (
      <StatusView
        kicker="Missing archive"
        title="That archive is not on the shelf"
        body="Sequence has three archives. This link does not match any of them."
        actionLabel="Back to the archives"
        onAction={() => router.replace('/')}
      />
    );
  }

  if (runError) {
    return (
      <StatusView
        kicker="Scorebook"
        title="This run could not be read"
        body="The archive is still here. Saved progress for it did not load."
        detail={runError}
        actionLabel="Try again"
        onAction={() => setRunAttempt((current) => current + 1)}
      />
    );
  }

  if (!run || !booted) {
    return (
      <StatusView
        kicker={pack.title}
        title="Opening this archive"
        body="Reading saved progress, then shuffling the round."
      />
    );
  }

  if (summary) {
    return (
      <Summary
        pack={pack}
        run={run}
        best={best[pack.id] ?? null}
        onNewRun={async () => {
          await clearRun(db, pack.id);
          setRun({});
          setSummary(false);
          setRoundIndex(0);
          setRetry((current) => current + 1);
        }}
        onReplay={() => {
          setSummary(false);
          setRoundIndex(0);
          setRetry((current) => current + 1);
        }}
      />
    );
  }

  const round = pack.rounds[roundIndex];
  const saved = run[round.id];
  const correctCount = result ? result.filter(Boolean).length : 0;
  const answer = sortedFacts(round.facts);

  async function onCheck() {
    if (!pack || checking || result || arranged.length === 0) return;
    const marks = grade(arranged, round.facts);
    setResult(marks);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
    setChecking(true);
    try {
      const outcome = await recordRound(
        db,
        pack.id,
        round.id,
        marks.filter(Boolean).length,
        round.facts.length,
        pack.rounds.map((item) => item.id),
      );
      setRun(outcome.run);
      await reloadBest();
      setNotice(noticeFor(outcome, pack.rounds.length));
    } catch (error: unknown) {
      setSaveError(error instanceof Error ? error.message : 'The score could not be saved.');
    } finally {
      setChecking(false);
    }
  }

  return (
    <PhoneFrame>
      <View style={styles.screen}>
        <View style={[styles.mast, { paddingTop: insets.top + 12 }]}>
          <View style={styles.mastRow}>
            <Pressable accessibilityRole="button" onPress={leaveRound} hitSlop={8}>
              <Text style={[styles.back, { fontFamily: fonts.semibold }]}>Archives</Text>
            </Pressable>
            {roundIndex > 0 ? (
              <Pressable accessibilityRole="button" onPress={() => setRoundIndex((current) => current - 1)} hitSlop={8}>
                <Text style={[styles.back, { fontFamily: fonts.semibold }]}>Previous</Text>
              </Pressable>
            ) : null}
          </View>
          <Text style={[styles.kicker, { fontFamily: fonts.semibold }]}>
            Round {roundIndex + 1} of {pack.rounds.length}
          </Text>
          <Text style={[styles.title, { fontFamily: fonts.display }]}>{pack.title}</Text>
          <Text style={[styles.roundTitle, { fontFamily: fonts.medium }]}>{round.title}</Text>
        </View>
        <ScrollView ref={scrollRef} style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={[styles.hint, { fontFamily: fonts.body }]}>
            Hold a card and drag it. The arrows move it one place, including in the web preview. Earliest goes first.
          </Text>
          {saved && !result ? (
            <Text style={[styles.savedNote, { fontFamily: fonts.medium }]}>
              This round already counts as {saved.correct}/{saved.total} in the current run. Checking again replaces it.
            </Text>
          ) : null}
          {result ? (
            <View testID="score-banner" style={styles.banner}>
              <Text style={[styles.bannerScore, { fontFamily: fonts.display }]}>
                {correctCount} of {round.facts.length} in place
              </Text>
              {notice ? <Text style={[styles.bannerNote, { fontFamily: fonts.body }]}>{notice}</Text> : null}
              {saveError ? <Text style={[styles.saveError, { fontFamily: fonts.medium }]}>{saveError}</Text> : null}
            </View>
          ) : null}
          {arranged.length === 0 ? (
            <Text style={[styles.hint, { fontFamily: fonts.body }]}>Shuffling this round.</Text>
          ) : (
            <View testID="round-list">
              <ReorderableList
                items={arranged}
                enabled={!result}
                onReorder={setArranged}
                toneFor={(_item, index) => {
                  if (!result) return 'idle';
                  return result[index] ? 'correct' : 'wrong';
                }}
                renderItem={(fact, index) => (
                  <View>
                    <Text style={[styles.factTitle, { fontFamily: fonts.semibold }]}>{fact.title}</Text>
                    <Text style={[styles.factBlurb, { fontFamily: fonts.body }]}>{fact.blurb}</Text>
                    {result ? (
                      <Text
                        style={[
                          styles.verdict,
                          { fontFamily: fonts.medium, color: result[index] ? theme.correct : theme.wrong },
                        ]}
                      >
                        {result[index] ? 'Correct' : 'Wrong'} · {fact.dateLabel}
                        {fact.revealNote ? ` · ${fact.revealNote}` : ''}
                      </Text>
                    ) : null}
                  </View>
                )}
              />
            </View>
          )}
          {result ? (
            <View testID="right-order" style={styles.record}>
              <Text style={[styles.recordTitle, { fontFamily: fonts.display }]}>Right order</Text>
              {answer.map((fact, index) => (
                <View key={fact.id} style={styles.recordRow}>
                  <Text style={[styles.recordIndex, { fontFamily: fonts.semibold }]}>{index + 1}</Text>
                  <View style={styles.recordCopy}>
                    <Text style={[styles.recordName, { fontFamily: fonts.medium }]}>{fact.title}</Text>
                    <Text style={[styles.recordDate, { fontFamily: fonts.body }]}>
                      {fact.dateLabel}
                      {fact.revealNote ? ` · ${fact.revealNote}` : ''}
                    </Text>
                  </View>
                </View>
              ))}
              <Pressable
                accessibilityRole="button"
                onPress={async () => {
                  await clearRun(db, pack.id);
                  setRun({});
                  setRoundIndex(0);
                  setRetry((current) => current + 1);
                }}
                style={styles.reset}
              >
                <Text style={[styles.resetLabel, { fontFamily: fonts.medium }]}>Reset this run</Text>
              </Pressable>
            </View>
          ) : null}
        </ScrollView>
        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 12) }]}>
          {result ? (
            <>
              {roundIndex < pack.rounds.length - 1 ? (
                <Pressable
                  testID="next-round"
                  accessibilityRole="button"
                  onPress={() => setRoundIndex((current) => current + 1)}
                  style={styles.primary}
                >
                  <Text style={[styles.primaryLabel, { fontFamily: fonts.semibold }]}>Next round</Text>
                </Pressable>
              ) : (
                <Pressable accessibilityRole="button" onPress={() => setSummary(true)} style={styles.primary}>
                  <Text style={[styles.primaryLabel, { fontFamily: fonts.semibold }]}>See this run</Text>
                </Pressable>
              )}
              <Pressable
                testID="try-again"
                accessibilityRole="button"
                onPress={() => setRetry((current) => current + 1)}
                style={styles.secondary}
              >
                <Text style={[styles.secondaryLabel, { fontFamily: fonts.semibold }]}>Try this round again</Text>
              </Pressable>
            </>
          ) : (
            <Pressable
              testID="check-order"
              accessibilityRole="button"
              disabled={checking || arranged.length === 0}
              onPress={() => {
                onCheck().catch(() => undefined);
              }}
              style={[styles.primary, checking ? styles.disabled : null]}
            >
              <Text style={[styles.primaryLabel, { fontFamily: fonts.semibold }]}>
                {checking ? 'Saving the score' : 'Check order'}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </PhoneFrame>
  );
}

function noticeFor(outcome: { complete: boolean; isNewBest: boolean; best: Score | null; run: RunScores }, roundCount: number): string {
  const checked = Object.keys(outcome.run).length;
  if (!outcome.complete) {
    return `${checked} of ${roundCount} rounds checked. A best run is saved only after every round has a check.`;
  }
  if (roundCount === 1) {
    return outcome.isNewBest ? 'New best run, saved on this device.' : bestLine(outcome.best);
  }
  return outcome.isNewBest ? 'Full run saved. New best run on this device.' : `Full run checked. ${bestLine(outcome.best)}`;
}

function bestLine(best: Score | null): string {
  if (!best) return 'Saved on this device.';
  return `Best run stays ${formatFraction(best.correct, best.total)}.`;
}

function Summary({
  pack,
  run,
  best,
  onNewRun,
  onReplay,
}: {
  pack: Pack;
  run: RunScores;
  best: Score | null;
  onNewRun: () => Promise<void>;
  onReplay: () => void;
}) {
  const fonts = useFontChoice();
  const insets = useSafeAreaInsets();
  const correct = pack.rounds.reduce((sum, round) => sum + (run[round.id]?.correct ?? 0), 0);
  const total = pack.rounds.reduce((sum, round) => sum + (run[round.id]?.total ?? 0), 0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <PhoneFrame>
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 28 }}>
        <View style={[styles.mast, { paddingTop: insets.top + 12 }]}>
          <Pressable accessibilityRole="button" onPress={leaveRound} hitSlop={8}>
            <Text style={[styles.back, { fontFamily: fonts.semibold }]}>Archives</Text>
          </Pressable>
          <Text style={[styles.kicker, { fontFamily: fonts.semibold }]}>Full run</Text>
          <Text style={[styles.title, { fontFamily: fonts.display }]}>{pack.title}</Text>
        </View>
        <View style={styles.copyBlock}>
          <Text style={[styles.summaryLabel, { fontFamily: fonts.semibold }]}>This run</Text>
          <Text style={[styles.summaryScore, { fontFamily: fonts.display }]}>{formatFraction(correct, total)}</Text>
          <Text style={[styles.hint, { fontFamily: fonts.body }]}>
            That is every round, using the latest check of each. The shelf keeps the best full run.
          </Text>
          <Text style={[styles.summaryLabel, { fontFamily: fonts.semibold }]}>Best run</Text>
          <Text style={[styles.summaryBest, { fontFamily: fonts.medium }]}>
            {best ? formatFraction(best.correct, best.total) : 'No finished run yet'}
          </Text>
          {pack.rounds.map((round, index) => {
            const score = run[round.id];
            return (
              <Text key={round.id} style={[styles.roundLine, { fontFamily: fonts.body }]}>
                Round {index + 1} · {round.title} · {score ? `${score.correct}/${score.total}` : 'not checked'}
              </Text>
            );
          })}
          {error ? <Text style={[styles.saveError, { fontFamily: fonts.medium }]}>{error}</Text> : null}
          <Pressable
            accessibilityRole="button"
            disabled={busy}
            onPress={() => {
              setBusy(true);
              onNewRun()
                .catch((startError: unknown) => {
                  setError(startError instanceof Error ? startError.message : 'The run could not be reset.');
                })
                .finally(() => setBusy(false));
            }}
            style={styles.primary}
          >
            <Text style={[styles.primaryLabel, { fontFamily: fonts.semibold }]}>
              {busy ? 'Clearing this run' : 'Start a new run'}
            </Text>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={onReplay} style={styles.secondary}>
            <Text style={[styles.secondaryLabel, { fontFamily: fonts.semibold }]}>Replay round 1</Text>
          </Pressable>
        </View>
      </ScrollView>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mast: {
    backgroundColor: theme.grove,
    paddingHorizontal: 18,
    paddingBottom: 14,
  },
  mastRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  back: {
    color: theme.brassSoft,
    fontSize: 14,
  },
  kicker: {
    color: theme.brassSoft,
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: {
    color: theme.card,
    fontSize: 26,
    lineHeight: 30,
    marginTop: 4,
  },
  roundTitle: {
    color: '#d5e4dc',
    fontSize: 14,
    marginTop: 4,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 18,
  },
  hint: {
    color: theme.inkSoft,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  savedNote: {
    color: theme.grove,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  banner: {
    backgroundColor: theme.groveDeep,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  bannerScore: {
    color: theme.card,
    fontSize: 28,
    lineHeight: 32,
  },
  bannerNote: {
    color: '#d5e4dc',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
  },
  saveError: {
    color: '#f0b4a8',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 8,
  },
  factTitle: {
    color: theme.ink,
    fontSize: 16,
    lineHeight: 21,
  },
  factBlurb: {
    color: theme.inkSoft,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  verdict: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },
  record: {
    marginTop: 8,
    borderTopColor: theme.line,
    borderTopWidth: 1,
    paddingTop: 12,
  },
  recordTitle: {
    color: theme.ink,
    fontSize: 24,
    marginBottom: 8,
  },
  recordRow: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 6,
    borderBottomColor: theme.line,
    borderBottomWidth: 1,
  },
  recordIndex: {
    width: 20,
    color: theme.brass,
    fontSize: 13,
  },
  recordCopy: {
    flex: 1,
  },
  recordName: {
    color: theme.ink,
    fontSize: 14,
    lineHeight: 18,
  },
  recordDate: {
    color: theme.inkSoft,
    fontSize: 13,
    lineHeight: 18,
  },
  reset: {
    alignSelf: 'flex-start',
    marginTop: 14,
    paddingVertical: 6,
  },
  resetLabel: {
    color: theme.wrong,
    fontSize: 14,
  },
  footer: {
    borderTopColor: theme.line,
    borderTopWidth: 1,
    backgroundColor: theme.paper,
    paddingHorizontal: 14,
    paddingTop: 10,
    gap: 8,
  },
  primary: {
    backgroundColor: theme.grove,
    alignItems: 'center',
    paddingVertical: 13,
    marginTop: 8,
  },
  primaryLabel: {
    color: theme.card,
    fontSize: 16,
  },
  secondary: {
    borderColor: theme.grove,
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  secondaryLabel: {
    color: theme.grove,
    fontSize: 15,
  },
  disabled: {
    opacity: 0.6,
  },
  copyBlock: {
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  summaryLabel: {
    color: theme.brass,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 8,
  },
  summaryScore: {
    color: theme.ink,
    fontSize: 36,
    lineHeight: 40,
    marginTop: 4,
  },
  summaryBest: {
    color: theme.ink,
    fontSize: 18,
    marginTop: 4,
    marginBottom: 8,
  },
  roundLine: {
    color: theme.inkSoft,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
});

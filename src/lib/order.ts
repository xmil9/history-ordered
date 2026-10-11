import type { Fact } from '@/content/types';

export function sortedFacts(facts: Fact[]): Fact[] {
  return facts.slice().sort((a, b) => a.sortKey - b.sortKey);
}

export function grade(arranged: Fact[], facts: Fact[]): boolean[] {
  const answer = sortedFacts(facts);
  return arranged.map((fact, index) => fact.id === answer[index]?.id);
}

export function shuffleFacts(facts: Fact[]): Fact[] {
  const next = facts.slice();
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i];
    next[i] = next[j];
    next[j] = swap;
  }
  const answer = sortedFacts(facts);
  const alreadyOrdered = next.every((fact, index) => fact.id === answer[index]?.id);
  if (alreadyOrdered && next.length > 1) {
    const swap = next[0];
    next[0] = next[1];
    next[1] = swap;
  }
  return next;
}

export function moveItem<T>(items: T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= items.length || to >= items.length) {
    return items;
  }
  const next = items.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function formatFraction(correct: number, total: number): string {
  if (total <= 0) return '0/0';
  const percent = Math.round((correct / total) * 100);
  return `${correct}/${total} · ${percent}%`;
}

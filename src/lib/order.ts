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

export function placeHint(
  arranged: Fact[],
  facts: Fact[],
  pinnedIds: readonly string[],
): { arranged: Fact[]; pinnedIds: string[] } | null {
  const answer = sortedFacts(facts);
  const pinned = new Set(pinnedIds);
  const unpinned = answer.filter((fact) => !pinned.has(fact.id));
  const misplaced = answer.filter((fact, index) => !pinned.has(fact.id) && arranged[index]?.id !== fact.id);
  const pool = misplaced.length > 0 ? misplaced : unpinned;
  const target = pool[Math.floor(Math.random() * pool.length)];
  if (!target) return null;
  const nextPinned = [...pinnedIds, target.id];
  const pinnedSet = new Set(nextPinned);
  const loose = arranged.filter((fact) => !pinnedSet.has(fact.id));
  let cursor = 0;
  const next = answer.map((fact) => {
    if (pinnedSet.has(fact.id)) return fact;
    const item = loose[cursor];
    cursor += 1;
    return item;
  });
  return { arranged: next, pinnedIds: nextPinned };
}

export function moveItemSkippingLocked<T>(
  items: T[],
  from: number,
  to: number,
  isLocked: (item: T, index: number) => boolean,
): T[] {
  if (from === to || from < 0 || to < 0 || from >= items.length || to >= items.length) return items;
  if (isLocked(items[from], from)) return items;

  const slots = items
    .map((item, index) => ({ item, index }))
    .filter((entry) => !isLocked(entry.item, entry.index));
  const fromSlot = slots.findIndex((entry) => entry.index === from);
  if (fromSlot < 0) return items;

  let toSlot = slots.findIndex((entry) => entry.index === to);
  if (toSlot < 0) {
    if (to > from) {
      toSlot = slots.findIndex((entry) => entry.index >= to);
    } else {
      toSlot = -1;
      slots.forEach((entry, index) => {
        if (entry.index <= to) toSlot = index;
      });
    }
    if (toSlot < 0) return items;
  }
  if (toSlot === fromSlot) return items;

  const loose = slots.map((entry) => entry.item);
  const [moved] = loose.splice(fromSlot, 1);
  loose.splice(toSlot, 0, moved);
  const next = items.slice();
  slots.forEach((entry, index) => {
    next[entry.index] = loose[index];
  });
  return next;
}

export function formatFraction(correct: number, total: number): string {
  if (total <= 0) return '0/0';
  const percent = Math.round((correct / total) * 100);
  return `${correct}/${total} · ${percent}%`;
}

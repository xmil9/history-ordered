import { alexanderRound } from '@/content/alexander';
import { scienceRounds } from '@/content/science';
import { stateRounds } from '@/content/states';
import type { Pack } from '@/content/types';

export const packs: Pack[] = [
  {
    id: 'alexander',
    title: 'Battles of Alexander the Great',
    summary: 'Eight major engagements, from the Granicus to the Hydaspes, in a single round.',
    rounds: [alexanderRound],
  },
  {
    id: 'science',
    title: 'Scientific discoveries of the 18th century',
    summary: 'Sixteen well-known discoveries and inventions, split into two rounds of eight.',
    rounds: scienceRounds,
  },
  {
    id: 'states',
    title: 'US states joining the Union',
    summary:
      'All fifty states, in admission order, split into seven rounds. Same-day states stay in the order the proclamations were signed.',
    rounds: stateRounds,
  },
];

export function getPack(id: string | undefined): Pack | undefined {
  return packs.find((pack) => pack.id === id);
}

function assertChronology(pack: Pack): void {
  const seen = new Set<string>();
  let previous = -Infinity;
  for (const round of pack.rounds) {
    if (round.facts.length < 6 || round.facts.length > 8) {
      throw new Error(`${pack.id}/${round.id} has ${round.facts.length} facts`);
    }
    for (const fact of round.facts) {
      if (seen.has(fact.id)) throw new Error(`Duplicate fact id ${fact.id}`);
      seen.add(fact.id);
      if (fact.sortKey <= previous) {
        throw new Error(`${pack.id}/${round.id}/${fact.id} is not strictly after the previous fact`);
      }
      previous = fact.sortKey;
    }
  }
}

for (const pack of packs) assertChronology(pack);

const stateCount = packs.find((pack) => pack.id === 'states')?.rounds.reduce((sum, round) => sum + round.facts.length, 0);
if (stateCount !== 50) {
  throw new Error(`Expected 50 states, found ${stateCount}`);
}

import { alexanderRound } from '@/content/alexander';
import { baseballRounds } from '@/content/baseball';
import { basketballRounds } from '@/content/basketball';
import { egyptRounds } from '@/content/egypt';
import { electricityRounds } from '@/content/electricity';
import { extinctionsRound } from '@/content/extinctions';
import { henryRound } from '@/content/henry';
import { odysseyRounds } from '@/content/odyssey';
import { romeRounds } from '@/content/rome';
import { rosesRound } from '@/content/roses';
import { scienceRounds } from '@/content/science';
import { soccerRounds } from '@/content/soccer';
import { spaceRounds } from '@/content/space';
import { stateRounds } from '@/content/states';
import { superBowlRounds } from '@/content/superbowl';
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
  {
    id: 'henry',
    title: 'The wives of Henry VIII',
    summary: 'Six queens, in the order Henry married them.',
    rounds: [henryRound],
  },
  {
    id: 'roses',
    title: 'The Wars of the Roses',
    summary: 'Ten turning points, from the first St Albans to Stoke Field.',
    rounds: [rosesRound],
  },
  {
    id: 'rome',
    title: 'The Roman Empire',
    summary: 'Twenty events from Augustus to the fall of the West, in two rounds of ten.',
    rounds: romeRounds,
  },
  {
    id: 'odyssey',
    title: 'Stops in the Odyssey',
    summary: 'Twelve landfalls on the way home from Troy, in the order Odysseus travels, split into two rounds.',
    rounds: odysseyRounds,
  },
  {
    id: 'space',
    title: 'Space exploration',
    summary: 'Twenty missions and firsts, from Sputnik to the James Webb Space Telescope, in two rounds.',
    rounds: spaceRounds,
  },
  {
    id: 'egypt',
    title: 'Egyptian history',
    summary: 'Twenty events from unification to the Roman annexation, in two rounds. Early dates are the conventional ones.',
    rounds: egyptRounds,
  },
  {
    id: 'extinctions',
    title: 'The five mass extinctions',
    summary: 'The big five, from the Late Ordovician to the end of the Cretaceous.',
    rounds: [extinctionsRound],
  },
  {
    id: 'electricity',
    title: 'Advances in electricity',
    summary: 'Sixteen steps from Gilbert’s De Magnete to Hertz’s radio waves, in two rounds.',
    rounds: electricityRounds,
  },
  {
    id: 'superbowl',
    title: 'Super Bowl winning quarterbacks',
    summary: 'All sixty winning quarterbacks, from Bart Starr to Sam Darnold, in six rounds of ten.',
    rounds: superBowlRounds,
  },
  {
    id: 'baseball',
    title: 'Baseball',
    summary: 'Sixteen turns in the game, from the first World Series to the Cubs’ championship, in two rounds.',
    rounds: baseballRounds,
  },
  {
    id: 'basketball',
    title: 'Basketball',
    summary: 'Sixteen events, from Naismith’s peach baskets to the Bucks’ title, in two rounds.',
    rounds: basketballRounds,
  },
  {
    id: 'soccer',
    title: 'Soccer',
    summary: 'Sixteen events, from the founding of the FA to Argentina’s World Cup, in two rounds.',
    rounds: soccerRounds,
  },
];

export function getPack(id: string | undefined): Pack | undefined {
  return packs.find((pack) => pack.id === id);
}

function assertChronology(pack: Pack): void {
  const seen = new Set<string>();
  let previous = -Infinity;
  for (const round of pack.rounds) {
    if (round.facts.length < 5 || round.facts.length > 10) {
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

const superBowlCount = packs
  .find((pack) => pack.id === 'superbowl')
  ?.rounds.reduce((sum, round) => sum + round.facts.length, 0);
if (superBowlCount !== 60) {
  throw new Error(`Expected 60 Super Bowls, found ${superBowlCount}`);
}

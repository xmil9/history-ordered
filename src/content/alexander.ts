import type { Round } from '@/content/types';

function bc(year: number, month: number): number {
  // Earlier years are more negative. Within a year, a later month sorts after.
  return -(year * 100) + month;
}

export const alexanderRound: Round = {
  id: 'alexander-asia',
  title: 'From the Granicus to the Hydaspes',
  facts: [
    {
      id: 'granicus',
      title: 'Battle of the Granicus',
      blurb: 'The first pitched battle against the Persian satraps, at a river in Asia Minor.',
      dateLabel: 'May 334 BC',
      sortKey: bc(334, 5),
    },
    {
      id: 'issus',
      title: 'Battle of Issus',
      blurb: 'Darius III meets the Macedonian army in person and leaves the field.',
      dateLabel: 'November 333 BC',
      sortKey: bc(333, 11),
    },
    {
      id: 'tyre',
      title: 'Siege of Tyre',
      blurb: 'The island city falls after a causeway is built across the strait.',
      dateLabel: 'July 332 BC',
      sortKey: bc(332, 7),
    },
    {
      id: 'gaza',
      title: 'Siege of Gaza',
      blurb: 'The last Persian-held city on the coast road into Egypt.',
      dateLabel: 'September 332 BC',
      sortKey: bc(332, 9),
    },
    {
      id: 'gaugamela',
      title: 'Battle of Gaugamela',
      blurb: 'The decisive defeat of Darius III on the plain near Arbela.',
      dateLabel: 'October 1, 331 BC',
      sortKey: bc(331, 10),
    },
    {
      id: 'persian-gate',
      title: 'Battle of the Persian Gate',
      blurb: 'Ariobarzanes holds the mountain pass toward Persepolis.',
      dateLabel: 'January 330 BC',
      sortKey: bc(330, 1),
    },
    {
      id: 'jaxartes',
      title: 'Battle of the Jaxartes',
      blurb: 'Alexander crosses the river against the Saka beyond Sogdia.',
      dateLabel: '329 BC',
      sortKey: bc(329, 0),
    },
    {
      id: 'hydaspes',
      title: 'Battle of the Hydaspes',
      blurb: 'Porus is defeated at the river in the Punjab, then reinstated.',
      dateLabel: 'May 326 BC',
      sortKey: bc(326, 5),
    },
  ],
};

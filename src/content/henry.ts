import type { Round } from '@/content/types';

function day(year: number, month: number, date: number): number {
  return year * 10000 + month * 100 + date;
}

export const henryRound: Round = {
  id: 'henry-wives',
  title: 'Six queens',
  facts: [
    {
      id: 'catherine-aragon',
      title: 'Catherine of Aragon',
      blurb: 'The Spanish princess and mother of Mary. Henry later has the marriage annulled.',
      dateLabel: 'June 11, 1509',
      sortKey: day(1509, 6, 11),
    },
    {
      id: 'anne-boleyn',
      title: 'Anne Boleyn',
      blurb: 'Crowned queen and mother of Elizabeth. She is later executed.',
      dateLabel: 'January 25, 1533',
      sortKey: day(1533, 1, 25),
      revealNote: 'A private vow may have come in November 1532',
    },
    {
      id: 'jane-seymour',
      title: 'Jane Seymour',
      blurb: 'Gives Henry the son he wanted, and dies soon after the birth.',
      dateLabel: 'May 30, 1536',
      sortKey: day(1536, 5, 30),
    },
    {
      id: 'anne-cleves',
      title: 'Anne of Cleves',
      blurb: 'The marriage is annulled within months. She stays in England with a settlement.',
      dateLabel: 'January 6, 1540',
      sortKey: day(1540, 1, 6),
    },
    {
      id: 'catherine-howard',
      title: 'Catherine Howard',
      blurb: 'A young cousin of Anne Boleyn. She is later executed.',
      dateLabel: 'July 28, 1540',
      sortKey: day(1540, 7, 28),
    },
    {
      id: 'catherine-parr',
      title: 'Catherine Parr',
      blurb: 'Outlives Henry and looks after the education of his children.',
      dateLabel: 'July 12, 1543',
      sortKey: day(1543, 7, 12),
    },
  ],
};

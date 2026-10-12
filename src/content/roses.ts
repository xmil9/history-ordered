import type { Round } from '@/content/types';

function day(year: number, month: number, date: number): number {
  return year * 10000 + month * 100 + date;
}

export const rosesRound: Round = {
  id: 'roses-wars',
  title: 'From St Albans to Stoke',
  facts: [
    {
      id: 'st-albans',
      title: 'First Battle of St Albans',
      blurb: 'The Duke of York’s men defeat the king’s party in the streets of the town.',
      dateLabel: 'May 22, 1455',
      sortKey: day(1455, 5, 22),
    },
    {
      id: 'northampton',
      title: 'Battle of Northampton',
      blurb: 'Warwick’s army takes the camp and captures Henry VI.',
      dateLabel: 'July 10, 1460',
      sortKey: day(1460, 7, 10),
    },
    {
      id: 'wakefield',
      title: 'Battle of Wakefield',
      blurb: 'Richard, Duke of York, is killed. His head is set on the gates of York.',
      dateLabel: 'December 30, 1460',
      sortKey: day(1460, 12, 30),
    },
    {
      id: 'towton',
      title: 'Battle of Towton',
      blurb: 'Fought in a snowstorm, it leaves Edward IV in control of the kingdom.',
      dateLabel: 'March 29, 1461',
      sortKey: day(1461, 3, 29),
    },
    {
      id: 'readeption',
      title: 'Henry VI restored',
      blurb: 'Warwick puts Henry back on the throne, and Edward IV flees to Burgundy.',
      dateLabel: 'October 3, 1470',
      sortKey: day(1470, 10, 3),
    },
    {
      id: 'barnet',
      title: 'Battle of Barnet',
      blurb: 'Warwick the Kingmaker is killed in the fog.',
      dateLabel: 'April 14, 1471',
      sortKey: day(1471, 4, 14),
    },
    {
      id: 'tewkesbury',
      title: 'Battle of Tewkesbury',
      blurb: 'The Lancastrian prince Edward is killed and the field army breaks.',
      dateLabel: 'May 4, 1471',
      sortKey: day(1471, 5, 4),
    },
    {
      id: 'richard-crowned',
      title: 'Richard III takes the crown',
      blurb: 'Edward V is set aside, and his uncle is proclaimed king.',
      dateLabel: 'June 26, 1483',
      sortKey: day(1483, 6, 26),
    },
    {
      id: 'bosworth',
      title: 'Battle of Bosworth Field',
      blurb: 'Richard III is killed, and Henry Tudor takes the crown.',
      dateLabel: 'August 22, 1485',
      sortKey: day(1485, 8, 22),
    },
    {
      id: 'stoke',
      title: 'Battle of Stoke Field',
      blurb: 'The army raised for Lambert Simnel is beaten.',
      dateLabel: 'June 16, 1487',
      sortKey: day(1487, 6, 16),
    },
  ],
};

import type { Fact, Round } from '@/content/types';

type StateRow = [name: string, dateLabel: string, year: number, month: number, day: number, tie?: string];

const STATES: StateRow[] = [
  ['Delaware', 'December 7, 1787', 1787, 12, 7],
  ['Pennsylvania', 'December 12, 1787', 1787, 12, 12],
  ['New Jersey', 'December 18, 1787', 1787, 12, 18],
  ['Georgia', 'January 2, 1788', 1788, 1, 2],
  ['Connecticut', 'January 9, 1788', 1788, 1, 9],
  ['Massachusetts', 'February 6, 1788', 1788, 2, 6],
  ['Maryland', 'April 28, 1788', 1788, 4, 28],
  ['South Carolina', 'May 23, 1788', 1788, 5, 23],
  ['New Hampshire', 'June 21, 1788', 1788, 6, 21],
  ['Virginia', 'June 25, 1788', 1788, 6, 25],
  ['New York', 'July 26, 1788', 1788, 7, 26],
  ['North Carolina', 'November 21, 1789', 1789, 11, 21],
  ['Rhode Island', 'May 29, 1790', 1790, 5, 29],
  ['Vermont', 'March 4, 1791', 1791, 3, 4],
  ['Kentucky', 'June 1, 1792', 1792, 6, 1],
  ['Tennessee', 'June 1, 1796', 1796, 6, 1],
  ['Ohio', 'March 1, 1803', 1803, 3, 1],
  ['Louisiana', 'April 30, 1812', 1812, 4, 30],
  ['Indiana', 'December 11, 1816', 1816, 12, 11],
  ['Mississippi', 'December 10, 1817', 1817, 12, 10],
  ['Illinois', 'December 3, 1818', 1818, 12, 3],
  ['Alabama', 'December 14, 1819', 1819, 12, 14],
  ['Maine', 'March 15, 1820', 1820, 3, 15],
  ['Missouri', 'August 10, 1821', 1821, 8, 10],
  ['Arkansas', 'June 15, 1836', 1836, 6, 15],
  ['Michigan', 'January 26, 1837', 1837, 1, 26],
  ['Florida', 'March 3, 1845', 1845, 3, 3],
  ['Texas', 'December 29, 1845', 1845, 12, 29],
  ['Iowa', 'December 28, 1846', 1846, 12, 28],
  ['Wisconsin', 'May 29, 1848', 1848, 5, 29],
  ['California', 'September 9, 1850', 1850, 9, 9],
  ['Minnesota', 'May 11, 1858', 1858, 5, 11],
  ['Oregon', 'February 14, 1859', 1859, 2, 14],
  ['Kansas', 'January 29, 1861', 1861, 1, 29],
  ['West Virginia', 'June 20, 1863', 1863, 6, 20],
  ['Nevada', 'October 31, 1864', 1864, 10, 31],
  ['Nebraska', 'March 1, 1867', 1867, 3, 1],
  ['Colorado', 'August 1, 1876', 1876, 8, 1],
  ['North Dakota', 'November 2, 1889', 1889, 11, 2, 'proclamation signed before South Dakota'],
  ['South Dakota', 'November 2, 1889', 1889, 11, 2, 'proclamation signed after North Dakota'],
  ['Montana', 'November 8, 1889', 1889, 11, 8],
  ['Washington', 'November 11, 1889', 1889, 11, 11],
  ['Idaho', 'July 3, 1890', 1890, 7, 3],
  ['Wyoming', 'July 10, 1890', 1890, 7, 10],
  ['Utah', 'January 4, 1896', 1896, 1, 4],
  ['Oklahoma', 'November 16, 1907', 1907, 11, 16],
  ['New Mexico', 'January 6, 1912', 1912, 1, 6],
  ['Arizona', 'February 14, 1912', 1912, 2, 14],
  ['Alaska', 'January 3, 1959', 1959, 1, 3],
  ['Hawaii', 'August 21, 1959', 1959, 8, 21],
];

const ROUND_META: Array<[id: string, title: string, start: number, end: number]> = [
  ['states-ratifications', 'First ratifications', 0, 8],
  ['states-holds', 'The Union holds', 8, 16],
  ['states-mountains', 'Over the mountains', 16, 24],
  ['states-gulf', 'Gulf and lakes', 24, 30],
  ['states-west', 'War and the West', 30, 37],
  ['states-northwest', 'The northwest', 37, 44],
  ['states-last', 'Utah to Hawaii', 44, 50],
];

function ordinal(value: number): string {
  const mod100 = value % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${value}th`;
  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}

function toFact(row: StateRow, order: number): Fact {
  const [name, dateLabel, year, month, day, tieBreak] = row;
  const tie = name === 'South Dakota' ? 0.5 : 0;
  const place = `${ordinal(order)} state`;
  return {
    id: name.toLowerCase().replace(/\s+/g, '-'),
    title: name,
    blurb: order <= 13 ? 'Ratified the Constitution' : 'Admitted by Congress',
    dateLabel,
    sortKey: year * 10000 + month * 100 + day + tie,
    revealNote: tieBreak ? `${place} · ${tieBreak}` : place,
  };
}

const facts = STATES.map((row, index) => toFact(row, index + 1));

export const stateRounds: Round[] = ROUND_META.map(([id, title, start, end]) => ({
  id,
  title,
  facts: facts.slice(start, end),
}));

import type { Round } from '@/content/types';

function day(year: number, month: number, date: number): number {
  return year * 10000 + month * 100 + date;
}

export const baseballRounds: Round[] = [
  {
    id: 'baseball-classic',
    title: 'From the World Series to the perfect game',
    facts: [
      {
        id: 'world-series',
        title: 'The first World Series',
        blurb: 'The Boston Americans beat the Pittsburgh Pirates in a postseason series between the two leagues.',
        dateLabel: 'October 13, 1903',
        sortKey: day(1903, 10, 13),
      },
      {
        id: 'ruth-sold',
        title: 'Babe Ruth is sold to the Yankees',
        blurb: 'The Red Sox send Ruth to New York for cash.',
        dateLabel: 'January 5, 1920',
        sortKey: day(1920, 1, 5),
      },
      {
        id: 'negro-leagues',
        title: 'The Negro National League is founded',
        blurb: 'Rube Foster organizes the league at a meeting in Kansas City.',
        dateLabel: 'February 13, 1920',
        sortKey: day(1920, 2, 13),
      },
      {
        id: 'ruth-60',
        title: 'Babe Ruth hits his 60th home run',
        blurb: 'Ruth sets the single-season home-run record on the last day of the Yankees’ season.',
        dateLabel: 'September 30, 1927',
        sortKey: day(1927, 9, 30),
      },
      {
        id: 'gehrig',
        title: 'Lou Gehrig’s farewell',
        blurb: 'Gehrig tells the Yankee Stadium crowd he considers himself the luckiest man on the face of the earth.',
        dateLabel: 'July 4, 1939',
        sortKey: day(1939, 7, 4),
      },
      {
        id: 'robinson',
        title: 'Jackie Robinson debuts',
        blurb: 'Robinson plays first base for the Brooklyn Dodgers, ending the color line in the major leagues.',
        dateLabel: 'April 15, 1947',
        sortKey: day(1947, 4, 15),
      },
      {
        id: 'thomson',
        title: 'The Shot Heard Round the World',
        blurb: 'Bobby Thomson’s home run gives the New York Giants the pennant over the Brooklyn Dodgers.',
        dateLabel: 'October 3, 1951',
        sortKey: day(1951, 10, 3),
      },
      {
        id: 'larsen',
        title: 'Don Larsen’s perfect game',
        blurb: 'Larsen retires all 27 Brooklyn Dodgers in a World Series game.',
        dateLabel: 'October 8, 1956',
        sortKey: day(1956, 10, 8),
      },
    ],
  },
  {
    id: 'baseball-modern',
    title: 'From 61 home runs to the Cubs',
    facts: [
      {
        id: 'maris',
        title: 'Roger Maris hits his 61st',
        blurb: 'Maris passes Ruth’s single-season home-run mark on the last day of the season.',
        dateLabel: 'October 1, 1961',
        sortKey: day(1961, 10, 1),
      },
      {
        id: 'aaron',
        title: 'Hank Aaron hits his 715th',
        blurb: 'Aaron passes Ruth’s career home-run record in Atlanta.',
        dateLabel: 'April 8, 1974',
        sortKey: day(1974, 4, 8),
      },
      {
        id: 'fisk',
        title: 'Carlton Fisk waves it fair',
        blurb: 'Fisk’s home run in the 12th inning wins a World Series game for the Red Sox.',
        dateLabel: 'October 21, 1975',
        sortKey: day(1975, 10, 21),
      },
      {
        id: 'free-agency',
        title: 'The reserve clause is struck down',
        blurb: 'Arbitrator Peter Seitz rules Andy Messersmith and Dave McNally are free to sign with any club.',
        dateLabel: 'December 23, 1975',
        sortKey: day(1975, 12, 23),
      },
      {
        id: 'gibson',
        title: 'Kirk Gibson’s home run',
        blurb: 'Gibson, limping, hits a pinch-hit home run to win the first game of the World Series.',
        dateLabel: 'October 15, 1988',
        sortKey: day(1988, 10, 15),
      },
      {
        id: 'ripken',
        title: 'Cal Ripken passes Gehrig',
        blurb: 'Ripken plays in his 2,131st consecutive game and passes Lou Gehrig’s streak.',
        dateLabel: 'September 6, 1995',
        sortKey: day(1995, 9, 6),
      },
      {
        id: 'red-sox',
        title: 'The Red Sox win the World Series',
        blurb: 'Boston beats the Cardinals and ends 86 years without a championship.',
        dateLabel: 'October 27, 2004',
        sortKey: day(2004, 10, 27),
      },
      {
        id: 'cubs',
        title: 'The Cubs win the World Series',
        blurb: 'Chicago beats the Indians and ends 108 years without a championship.',
        dateLabel: 'November 2, 2016',
        sortKey: day(2016, 11, 2),
      },
    ],
  },
];

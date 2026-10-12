import type { Round } from '@/content/types';

function day(year: number, month: number, date: number): number {
  return year * 10000 + month * 100 + date;
}

export const basketballRounds: Round[] = [
  {
    id: 'basketball-origins',
    title: 'From the peach basket to the merger',
    facts: [
      {
        id: 'naismith',
        title: 'The first game of basketball',
        blurb: 'James Naismith’s class at the Springfield YMCA plays with a soccer ball and two peach baskets.',
        dateLabel: 'December 21, 1891',
        sortKey: day(1891, 12, 21),
      },
      {
        id: 'baa',
        title: 'The league that becomes the NBA is founded',
        blurb: 'Owners meet in New York and start the Basketball Association of America.',
        dateLabel: 'June 6, 1946',
        sortKey: day(1946, 6, 6),
      },
      {
        id: 'wilt-100',
        title: 'Wilt Chamberlain scores 100',
        blurb: 'Chamberlain scores 100 points for the Philadelphia Warriors against the Knicks in Hershey.',
        dateLabel: 'March 2, 1962',
        sortKey: day(1962, 3, 2),
      },
      {
        id: 'texas-western',
        title: 'Texas Western wins the NCAA title',
        blurb: 'A starting five of Black players beats Kentucky for the national championship.',
        dateLabel: 'March 19, 1966',
        sortKey: day(1966, 3, 19),
      },
      {
        id: 'merger',
        title: 'The NBA and ABA merge',
        blurb: 'Four ABA teams join the NBA, and the rival league ends.',
        dateLabel: 'June 17, 1976',
        sortKey: day(1976, 6, 17),
      },
      {
        id: 'magic-bird',
        title: 'Magic and Bird in the NCAA final',
        blurb: 'Michigan State, with Magic Johnson, beats Indiana State and Larry Bird for the title.',
        dateLabel: 'March 26, 1979',
        sortKey: day(1979, 3, 26),
      },
      {
        id: 'dream-team',
        title: 'The Dream Team wins Olympic gold',
        blurb: 'The United States, stocked with NBA stars, beats Croatia for the gold medal.',
        dateLabel: 'August 8, 1992',
        sortKey: day(1992, 8, 8),
      },
      {
        id: 'wnba',
        title: 'The WNBA plays its first game',
        blurb: 'The New York Liberty and the Los Angeles Sparks open the league.',
        dateLabel: 'June 21, 1997',
        sortKey: day(1997, 6, 21),
      },
    ],
  },
  {
    id: 'basketball-modern',
    title: 'From the last shot to the Bucks',
    facts: [
      {
        id: 'jordan-shot',
        title: 'Michael Jordan’s last shot with the Bulls',
        blurb: 'Jordan’s jumper beats the Jazz and closes the Bulls’ second three-peat.',
        dateLabel: 'June 14, 1998',
        sortKey: day(1998, 6, 14),
      },
      {
        id: 'kobe-81',
        title: 'Kobe Bryant scores 81',
        blurb: 'Bryant scores 81 points for the Lakers against the Raptors.',
        dateLabel: 'January 22, 2006',
        sortKey: day(2006, 1, 22),
      },
      {
        id: 'the-decision',
        title: 'LeBron James announces “The Decision”',
        blurb: 'On a televised special, James says he is taking his talents to South Beach.',
        dateLabel: 'July 8, 2010',
        sortKey: day(2010, 7, 8),
      },
      {
        id: 'ray-allen',
        title: 'Ray Allen’s corner three',
        blurb: 'Allen’s three-pointer ties the Finals game and keeps the Heat alive against the Spurs.',
        dateLabel: 'June 18, 2013',
        sortKey: day(2013, 6, 18),
      },
      {
        id: 'warriors-73',
        title: 'The Warriors win their 73rd game',
        blurb: 'Golden State beats Memphis and passes the Bulls’ single-season wins record.',
        dateLabel: 'April 13, 2016',
        sortKey: day(2016, 4, 13),
      },
      {
        id: 'cavs-title',
        title: 'The Cavaliers win the title',
        blurb: 'Cleveland comes back from a 3–1 deficit and beats the Warriors in the Finals.',
        dateLabel: 'June 19, 2016',
        sortKey: day(2016, 6, 19),
      },
      {
        id: 'kawhi',
        title: 'Kawhi Leonard’s buzzer-beater',
        blurb: 'Leonard’s jumper from the corner beats the 76ers in the seventh game.',
        dateLabel: 'May 12, 2019',
        sortKey: day(2019, 5, 12),
      },
      {
        id: 'bucks',
        title: 'The Bucks win the championship',
        blurb: 'Giannis Antetokounmpo and Milwaukee beat the Suns for the title.',
        dateLabel: 'July 20, 2021',
        sortKey: day(2021, 7, 20),
      },
    ],
  },
];

import type { Round } from '@/content/types';

function day(year: number, month: number, date: number): number {
  return year * 10000 + month * 100 + date;
}

export const soccerRounds: Round[] = [
  {
    id: 'soccer-origins',
    title: 'From the FA to 1966',
    facts: [
      {
        id: 'fa-founded',
        title: 'The Football Association is founded',
        blurb: 'Clubs meet at the Freemasons’ Tavern in London and agree on a common set of laws.',
        dateLabel: 'October 26, 1863',
        sortKey: day(1863, 10, 26),
      },
      {
        id: 'fa-cup',
        title: 'The first FA Cup final',
        blurb: 'Wanderers beat the Royal Engineers at the Oval.',
        dateLabel: 'March 16, 1872',
        sortKey: day(1872, 3, 16),
      },
      {
        id: 'first-international',
        title: 'The first international match',
        blurb: 'Scotland and England play to a scoreless draw in Glasgow.',
        dateLabel: 'November 30, 1872',
        sortKey: day(1872, 11, 30),
      },
      {
        id: 'first-world-cup',
        title: 'Uruguay wins the first World Cup',
        blurb: 'The hosts beat Argentina in the final in Montevideo.',
        dateLabel: 'July 30, 1930',
        sortKey: day(1930, 7, 30),
      },
      {
        id: 'maracanazo',
        title: 'Uruguay beats Brazil in the Maracanã',
        blurb: 'Uruguay wins the World Cup decider in Rio, in front of a huge Brazilian crowd.',
        dateLabel: 'July 16, 1950',
        sortKey: day(1950, 7, 16),
      },
      {
        id: 'european-cup',
        title: 'Real Madrid wins the first European Cup',
        blurb: 'Real Madrid beats Reims in Paris in the first final of the European Cup.',
        dateLabel: 'June 13, 1956',
        sortKey: day(1956, 6, 13),
      },
      {
        id: 'brazil-1958',
        title: 'Brazil wins its first World Cup',
        blurb: 'A 17-year-old Pelé scores twice as Brazil beats Sweden in the final.',
        dateLabel: 'June 29, 1958',
        sortKey: day(1958, 6, 29),
      },
      {
        id: 'england-1966',
        title: 'England wins the World Cup',
        blurb: 'Geoff Hurst’s hat trick beats West Germany in the final at Wembley.',
        dateLabel: 'July 30, 1966',
        sortKey: day(1966, 7, 30),
      },
    ],
  },
  {
    id: 'soccer-modern',
    title: 'From total football to Qatar',
    facts: [
      {
        id: 'netherlands-1974',
        title: 'The Netherlands lose the World Cup final',
        blurb: 'West Germany beats Johan Cruyff’s side in Munich.',
        dateLabel: 'July 7, 1974',
        sortKey: day(1974, 7, 7),
      },
      {
        id: 'maradona',
        title: 'Maradona against England',
        blurb: 'Diego Maradona scores twice in a World Cup quarterfinal, one with his hand and one from midfield.',
        dateLabel: 'June 22, 1986',
        sortKey: day(1986, 6, 22),
      },
      {
        id: 'womens-world-cup',
        title: 'The first Women’s World Cup final',
        blurb: 'The United States beats Norway in the final, played in China.',
        dateLabel: 'November 30, 1991',
        sortKey: day(1991, 11, 30),
      },
      {
        id: 'premier-league',
        title: 'The Premier League kicks off',
        blurb: 'The breakaway English top division plays its first round of matches.',
        dateLabel: 'August 15, 1992',
        sortKey: day(1992, 8, 15),
      },
      {
        id: 'chastain',
        title: 'The United States wins the Women’s World Cup',
        blurb: 'Brandi Chastain scores the winning penalty against China in Pasadena.',
        dateLabel: 'July 10, 1999',
        sortKey: day(1999, 7, 10),
      },
      {
        id: 'zidane',
        title: 'Zidane is sent off in the final',
        blurb: 'Zinedine Zidane head-butts Marco Materazzi and is dismissed. Italy beats France.',
        dateLabel: 'July 9, 2006',
        sortKey: day(2006, 7, 9),
      },
      {
        id: 'leicester',
        title: 'Leicester City wins the league',
        blurb: 'A club that nearly went down the year before clinches the Premier League.',
        dateLabel: 'May 2, 2016',
        sortKey: day(2016, 5, 2),
      },
      {
        id: 'messi-world-cup',
        title: 'Argentina wins the World Cup',
        blurb: 'Lionel Messi lifts the trophy after Argentina beats France in a penalty shootout.',
        dateLabel: 'December 18, 2022',
        sortKey: day(2022, 12, 18),
      },
    ],
  },
];

import type { Round } from '@/content/types';

function day(year: number, month = 0, date = 0): number {
  return year * 10000 + month * 100 + date;
}

export const electricityRounds: Round[] = [
  {
    id: 'electricity-static',
    title: 'From the lodestone to the pile',
    facts: [
      {
        id: 'gilbert',
        title: 'Gilbert’s De Magnete',
        blurb: 'William Gilbert separates the attraction of rubbed amber from magnetism and names it electric.',
        dateLabel: '1600',
        sortKey: day(1600),
      },
      {
        id: 'guericke',
        title: 'Von Guericke’s sulfur globe',
        blurb: 'Otto von Guericke spins a ball of sulfur that sparks when rubbed, an early electrostatic machine.',
        dateLabel: '1663',
        sortKey: day(1663),
      },
      {
        id: 'gray',
        title: 'Gray sends a charge along a thread',
        blurb: 'Stephen Gray shows that the attraction from rubbed glass can travel along a line of packthread.',
        dateLabel: '1729',
        sortKey: day(1729),
      },
      {
        id: 'leyden',
        title: 'The Leyden jar',
        blurb: 'Pieter van Musschenbroek stores a sharp electric shock in a glass jar of water.',
        dateLabel: '1746',
        sortKey: day(1746),
      },
      {
        id: 'franklin',
        title: 'Franklin draws charge from a storm',
        blurb: 'Benjamin Franklin’s kite experiment connects lightning with the charge stored in a jar.',
        dateLabel: '1752',
        sortKey: day(1752),
      },
      {
        id: 'coulomb',
        title: 'Coulomb’s law',
        blurb: 'Charles-Augustin de Coulomb measures the force between charges and finds it falls with the square of the distance.',
        dateLabel: '1785',
        sortKey: day(1785),
      },
      {
        id: 'galvani',
        title: 'Galvani’s twitching frog',
        blurb: 'Luigi Galvani finds that a frog’s leg kicks when touched with two different metals.',
        dateLabel: '1791',
        sortKey: day(1791),
      },
      {
        id: 'volta',
        title: 'Volta’s pile',
        blurb: 'Alessandro Volta stacks discs of zinc and silver and produces a steady current.',
        dateLabel: '1800',
        sortKey: day(1800),
      },
    ],
  },
  {
    id: 'electricity-field',
    title: 'From the compass needle to radio waves',
    facts: [
      {
        id: 'orsted',
        title: 'Ørsted moves a compass with a current',
        blurb: 'Hans Christian Ørsted sees a compass needle swing when a wire is connected to a battery.',
        dateLabel: 'April 21, 1820',
        sortKey: day(1820, 4, 21),
      },
      {
        id: 'ampere',
        title: 'Ampère’s theory of current',
        blurb: 'André-Marie Ampère sets out how currents attract and repel, and treats magnetism as electricity in motion.',
        dateLabel: 'September 18, 1820',
        sortKey: day(1820, 9, 18),
      },
      {
        id: 'ohm',
        title: 'Ohm’s law',
        blurb: 'Georg Ohm relates the current in a wire to the voltage across it and the wire’s resistance.',
        dateLabel: '1827',
        sortKey: day(1827),
      },
      {
        id: 'faraday',
        title: 'Faraday induces a current',
        blurb: 'Michael Faraday generates a current by moving a magnet near a coil of wire.',
        dateLabel: 'August 29, 1831',
        sortKey: day(1831, 8, 29),
      },
      {
        id: 'morse',
        title: 'Morse’s telegraph line',
        blurb: 'Samuel Morse sends “What hath God wrought” from Washington to Baltimore.',
        dateLabel: 'May 24, 1844',
        sortKey: day(1844, 5, 24),
      },
      {
        id: 'maxwell',
        title: 'Maxwell’s theory of the electromagnetic field',
        blurb: 'James Clerk Maxwell publishes the paper that treats light as an electromagnetic wave.',
        dateLabel: '1865',
        sortKey: day(1865),
      },
      {
        id: 'edison',
        title: 'Edison’s lasting lamp',
        blurb: 'A carbon-filament bulb at Menlo Park burns long enough to be a practical light.',
        dateLabel: 'October 22, 1879',
        sortKey: day(1879, 10, 22),
      },
      {
        id: 'hertz',
        title: 'Hertz produces radio waves',
        blurb: 'Heinrich Hertz detects electromagnetic waves crossing his laboratory, as Maxwell’s theory required.',
        dateLabel: '1887',
        sortKey: day(1887),
      },
    ],
  },
];

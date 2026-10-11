import type { Round } from '@/content/types';

function year(value: number, month = 0, day = 0): number {
  return value * 10000 + month * 100 + day;
}

export const scienceRounds: Round[] = [
  {
    id: 'science-early',
    title: 'Instruments, engines, and sparks',
    facts: [
      {
        id: 'halley-comet',
        title: 'Halley shows the comet of 1682 will return',
        blurb: 'Edmond Halley argues that several recorded comets are one returning body.',
        dateLabel: '1705',
        sortKey: year(1705),
      },
      {
        id: 'newcomen-engine',
        title: 'Newcomen’s atmospheric engine at Dudley',
        blurb: 'Thomas Newcomen’s engine is set to pumping water at a coal works.',
        dateLabel: '1712',
        sortKey: year(1712),
      },
      {
        id: 'fahrenheit-thermometer',
        title: 'Fahrenheit’s mercury thermometer',
        blurb: 'Daniel Gabriel Fahrenheit builds a thermometer that uses mercury.',
        dateLabel: '1714',
        sortKey: year(1714),
      },
      {
        id: 'flying-shuttle',
        title: 'Kay’s flying shuttle',
        blurb: 'John Kay patents a shuttle that a weaver can send across a wider cloth.',
        dateLabel: '1733',
        sortKey: year(1733),
      },
      {
        id: 'systema-naturae',
        title: 'The first Systema Naturae',
        blurb: 'Carl Linnaeus publishes the first edition of his system for naming living things.',
        dateLabel: '1735',
        sortKey: year(1735),
      },
      {
        id: 'celsius-scale',
        title: 'Celsius proposes a hundred-step scale',
        blurb: 'Anders Celsius sets a temperature scale between the boiling and freezing of water.',
        dateLabel: '1742',
        sortKey: year(1742),
      },
      {
        id: 'leyden-jar',
        title: 'The Leyden jar',
        blurb: 'Pieter van Musschenbroek demonstrates a jar that stores an electric charge.',
        dateLabel: '1746',
        sortKey: year(1746),
      },
      {
        id: 'franklin-lightning',
        title: 'Franklin shows lightning is electrical',
        blurb: 'Benjamin Franklin’s experiments connect lightning with the charge in a jar.',
        dateLabel: '1752',
        sortKey: year(1752),
      },
    ],
  },
  {
    id: 'science-late',
    title: 'Gases, planets, and a vaccine',
    facts: [
      {
        id: 'cavendish-hydrogen',
        title: 'Cavendish isolates inflammable air',
        blurb: 'Henry Cavendish describes the gas later called hydrogen.',
        dateLabel: '1766',
        sortKey: year(1766),
      },
      {
        id: 'watt-condenser',
        title: 'Watt patents the separate condenser',
        blurb: 'James Watt patents a steam engine that condenses the steam away from the cylinder.',
        dateLabel: '1769',
        sortKey: year(1769),
      },
      {
        id: 'priestley-oxygen',
        title: 'Priestley isolates dephlogisticated air',
        blurb: 'Joseph Priestley prepares the gas later called oxygen.',
        dateLabel: '1774',
        sortKey: year(1774),
      },
      {
        id: 'herschel-uranus',
        title: 'Herschel finds a new planet',
        blurb: 'William Herschel, surveying the sky from Bath, recognizes a planet beyond Saturn.',
        dateLabel: 'March 13, 1781',
        sortKey: year(1781, 3, 13),
      },
      {
        id: 'montgolfier',
        title: 'The Montgolfier balloon at Annonay',
        blurb: 'The Montgolfier brothers send a hot-air balloon up in front of a public crowd.',
        dateLabel: 'June 4, 1783',
        sortKey: year(1783, 6, 4),
      },
      {
        id: 'coulomb-law',
        title: 'Coulomb’s law of electric force',
        blurb: 'Charles-Augustin de Coulomb publishes the inverse-square law for electric charges.',
        dateLabel: '1785',
        sortKey: year(1785),
      },
      {
        id: 'lavoisier-traite',
        title: 'Lavoisier’s Traité élémentaire de chimie',
        blurb: 'Antoine Lavoisier publishes the textbook that sets out the new chemistry.',
        dateLabel: '1789',
        sortKey: year(1789),
      },
      {
        id: 'jenner-vaccine',
        title: 'Jenner vaccinates James Phipps',
        blurb: 'Edward Jenner inoculates a boy with cowpox to protect him from smallpox.',
        dateLabel: 'May 14, 1796',
        sortKey: year(1796, 5, 14),
      },
    ],
  },
];

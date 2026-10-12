import type { Round } from '@/content/types';

function day(year: number, month: number, date: number): number {
  return year * 10000 + month * 100 + date;
}

export const spaceRounds: Round[] = [
  {
    id: 'space-firsts',
    title: 'Firsts above the atmosphere',
    facts: [
      {
        id: 'sputnik',
        title: 'Sputnik 1',
        blurb: 'The Soviet Union puts the first artificial satellite into orbit.',
        dateLabel: 'October 4, 1957',
        sortKey: day(1957, 10, 4),
      },
      {
        id: 'laika',
        title: 'Laika flies on Sputnik 2',
        blurb: 'A dog becomes the first animal sent into orbit.',
        dateLabel: 'November 3, 1957',
        sortKey: day(1957, 11, 3),
      },
      {
        id: 'explorer',
        title: 'Explorer 1',
        blurb: 'The United States reaches orbit and finds the Van Allen radiation belts.',
        dateLabel: 'January 31, 1958',
        sortKey: day(1958, 1, 31),
      },
      {
        id: 'luna-2',
        title: 'Luna 2 hits the Moon',
        blurb: 'A Soviet probe becomes the first human-made object to reach another world.',
        dateLabel: 'September 13, 1959',
        sortKey: day(1959, 9, 13),
      },
      {
        id: 'gagarin',
        title: 'Yuri Gagarin orbits Earth',
        blurb: 'A single orbit on Vostok 1 makes him the first person in space.',
        dateLabel: 'April 12, 1961',
        sortKey: day(1961, 4, 12),
      },
      {
        id: 'glenn',
        title: 'John Glenn orbits Earth',
        blurb: 'Friendship 7 carries the first American into orbit.',
        dateLabel: 'February 20, 1962',
        sortKey: day(1962, 2, 20),
      },
      {
        id: 'tereshkova',
        title: 'Valentina Tereshkova flies',
        blurb: 'She spends nearly three days in orbit, the first woman in space.',
        dateLabel: 'June 16, 1963',
        sortKey: day(1963, 6, 16),
      },
      {
        id: 'leonov',
        title: 'Alexei Leonov walks in space',
        blurb: 'He leaves his capsule on a tether for the first spacewalk.',
        dateLabel: 'March 18, 1965',
        sortKey: day(1965, 3, 18),
      },
      {
        id: 'luna-9',
        title: 'Luna 9 lands on the Moon',
        blurb: 'The probe soft-lands and sends back the first pictures from the surface.',
        dateLabel: 'February 3, 1966',
        sortKey: day(1966, 2, 3),
      },
      {
        id: 'apollo-8',
        title: 'Apollo 8 orbits the Moon',
        blurb: 'Frank Borman, Jim Lovell, and William Anders fly around the Moon and read from Genesis.',
        dateLabel: 'December 24, 1968',
        sortKey: day(1968, 12, 24),
      },
    ],
  },
  {
    id: 'space-outward',
    title: 'The Moon and after',
    facts: [
      {
        id: 'apollo-11',
        title: 'Apollo 11 lands on the Moon',
        blurb: 'Neil Armstrong and Buzz Aldrin walk on the Sea of Tranquility.',
        dateLabel: 'July 20, 1969',
        sortKey: day(1969, 7, 20),
      },
      {
        id: 'apollo-13',
        title: 'Apollo 13’s oxygen tank fails',
        blurb: 'An explosion cripples the spacecraft. The crew loops the Moon and returns in the lunar module.',
        dateLabel: 'April 13, 1970',
        sortKey: day(1970, 4, 13),
      },
      {
        id: 'salyut',
        title: 'Salyut 1',
        blurb: 'The Soviet Union launches the first space station.',
        dateLabel: 'April 19, 1971',
        sortKey: day(1971, 4, 19),
      },
      {
        id: 'viking',
        title: 'Viking 1 lands on Mars',
        blurb: 'The lander touches down in Chryse Planitia and sends pictures from the surface.',
        dateLabel: 'July 20, 1976',
        sortKey: day(1976, 7, 20),
      },
      {
        id: 'voyager',
        title: 'Voyager 1 is launched',
        blurb: 'The probe sets out on the tour that will carry it past Jupiter and Saturn.',
        dateLabel: 'September 5, 1977',
        sortKey: day(1977, 9, 5),
      },
      {
        id: 'columbia',
        title: 'Columbia’s first flight',
        blurb: 'The space shuttle lifts off and returns to a runway, the first reusable orbiter.',
        dateLabel: 'April 12, 1981',
        sortKey: day(1981, 4, 12),
      },
      {
        id: 'hubble',
        title: 'Hubble is launched',
        blurb: 'Discovery carries the space telescope into orbit.',
        dateLabel: 'April 24, 1990',
        sortKey: day(1990, 4, 24),
      },
      {
        id: 'zarya',
        title: 'The first module of the space station',
        blurb: 'Zarya reaches orbit and becomes the starting piece of the International Space Station.',
        dateLabel: 'November 20, 1998',
        sortKey: day(1998, 11, 20),
      },
      {
        id: 'curiosity',
        title: 'Curiosity lands on Mars',
        blurb: 'The rover is lowered into Gale Crater by a sky crane.',
        dateLabel: 'August 6, 2012',
        sortKey: day(2012, 8, 6),
      },
      {
        id: 'jwst',
        title: 'The James Webb Space Telescope launches',
        blurb: 'An Ariane 5 carries the infrared observatory toward its station beyond the Moon.',
        dateLabel: 'December 25, 2021',
        sortKey: day(2021, 12, 25),
      },
    ],
  },
];

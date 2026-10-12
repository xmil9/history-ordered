import type { Round } from '@/content/types';

export const odysseyRounds: Round[] = [
  {
    id: 'odyssey-east',
    title: 'From Ismarus to Aeaea',
    facts: [
      {
        id: 'cicones',
        title: 'The Cicones at Ismarus',
        blurb: 'Odysseus raids a Thracian town. The neighbors counterattack and drive the fleet off.',
        dateLabel: 'Days after leaving Troy',
        sortKey: 1,
      },
      {
        id: 'lotus-eaters',
        title: 'The lotus-eaters',
        blurb: 'Three scouts taste the lotus and have to be dragged back to the ships.',
        dateLabel: 'Early in the wanderings',
        sortKey: 2,
      },
      {
        id: 'polyphemus',
        title: 'Polyphemus',
        blurb: 'Odysseus blinds the Cyclops and gets his men out of the cave under the rams.',
        dateLabel: 'Before the bag of winds',
        sortKey: 3,
      },
      {
        id: 'aeolus',
        title: 'Aeolus',
        blurb: 'The keeper of the winds gives Odysseus a bag. The crew opens it within sight of Ithaca.',
        dateLabel: 'The floating island',
        sortKey: 4,
      },
      {
        id: 'laestrygonians',
        title: 'The Laestrygonians',
        blurb: 'Giants smash the fleet in a closed harbor. One ship gets away.',
        dateLabel: 'After the winds are loosed',
        sortKey: 5,
      },
      {
        id: 'circe',
        title: 'Circe on Aeaea',
        blurb: 'The enchantress turns men into swine. Odysseus stays a year.',
        dateLabel: 'A year on her island',
        sortKey: 6,
      },
    ],
  },
  {
    id: 'odyssey-west',
    title: 'From the dead to Scheria',
    facts: [
      {
        id: 'underworld',
        title: 'The land of the dead',
        blurb: 'Odysseus speaks with Tiresias, and with the shade of his mother.',
        dateLabel: 'The errand Circe sets',
        sortKey: 7,
      },
      {
        id: 'sirens',
        title: 'The Sirens',
        blurb: 'The crew stops their ears with wax. Odysseus is lashed to the mast so he can hear the song.',
        dateLabel: 'The first danger on the course home',
        sortKey: 8,
      },
      {
        id: 'scylla',
        title: 'Scylla and Charybdis',
        blurb: 'Six men are taken as the ship runs the strait between the cliff and the whirlpool.',
        dateLabel: 'The strait',
        sortKey: 9,
      },
      {
        id: 'thrinacia',
        title: 'Thrinacia',
        blurb: 'Hungry crewmen slaughter the cattle of the sun god Helios.',
        dateLabel: 'The island of the Sun’s cattle',
        sortKey: 10,
      },
      {
        id: 'calypso',
        title: 'Calypso on Ogygia',
        blurb: 'The nymph holds Odysseus for seven years, until the gods order his release.',
        dateLabel: 'Seven years on her island',
        sortKey: 11,
      },
      {
        id: 'phaeacians',
        title: 'The Phaeacians',
        blurb: 'Nausicaa finds him on the shore. A ship of Scheria carries him to Ithaca asleep.',
        dateLabel: 'The last hosts',
        sortKey: 12,
      },
    ],
  },
];

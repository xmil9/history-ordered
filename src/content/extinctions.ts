import type { Round } from '@/content/types';

export const extinctionsRound: Round = {
  id: 'extinctions-five',
  title: 'The big five',
  facts: [
    {
      id: 'ordovician',
      title: 'Late Ordovician extinction',
      blurb: 'A severe glaciation wipes out a large share of life in the seas.',
      dateLabel: 'c. 445 million years ago',
      sortKey: -445,
    },
    {
      id: 'devonian',
      title: 'Late Devonian extinction',
      blurb: 'Reef communities collapse, and many groups of armored fishes disappear.',
      dateLabel: 'c. 372 million years ago',
      sortKey: -372,
    },
    {
      id: 'permian',
      title: 'End-Permian extinction',
      blurb: 'The largest die-off in the fossil record. Most marine species vanish.',
      dateLabel: 'c. 252 million years ago',
      sortKey: -252,
    },
    {
      id: 'triassic',
      title: 'End-Triassic extinction',
      blurb: 'Many groups of large amphibians and reptiles disappear.',
      dateLabel: 'c. 201 million years ago',
      sortKey: -201,
    },
    {
      id: 'cretaceous',
      title: 'End-Cretaceous extinction',
      blurb: 'An impact and its aftermath end the non-bird dinosaurs, along with the ammonites.',
      dateLabel: '66 million years ago',
      sortKey: -66,
    },
  ],
};

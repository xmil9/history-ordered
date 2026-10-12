import type { Round } from '@/content/types';

function bc(year: number, month = 0): number {
  return -(year * 100) + month;
}

export const egyptRounds: Round[] = [
  {
    id: 'egypt-kingdoms',
    title: 'From unification to Tutankhamun',
    facts: [
      {
        id: 'narmer',
        title: 'Narmer unites the Two Lands',
        blurb: 'A king of Upper Egypt brings the Delta under one crown. Later lists call him Menes.',
        dateLabel: 'c. 3100 BC',
        sortKey: bc(3100),
      },
      {
        id: 'djoser',
        title: 'Djoser’s Step Pyramid',
        blurb: 'Imhotep raises the stone pyramid at Saqqara for King Djoser.',
        dateLabel: 'c. 2660 BC',
        sortKey: bc(2660),
      },
      {
        id: 'khufu',
        title: 'The Great Pyramid of Khufu',
        blurb: 'The largest pyramid at Giza is built for Khufu.',
        dateLabel: 'c. 2580 BC',
        sortKey: bc(2580),
      },
      {
        id: 'sphinx',
        title: 'The Great Sphinx',
        blurb: 'The colossal lion-bodied statue is carved at Giza, in the reign associated with Khafre.',
        dateLabel: 'c. 2500 BC',
        sortKey: bc(2500),
      },
      {
        id: 'mentuhotep',
        title: 'Mentuhotep II reunites Egypt',
        blurb: 'A Theban king ends the First Intermediate Period and opens the Middle Kingdom.',
        dateLabel: 'c. 2055 BC',
        sortKey: bc(2055),
      },
      {
        id: 'ahmose',
        title: 'Ahmose expels the Hyksos',
        blurb: 'A Theban king takes Avaris and pushes the Hyksos out of the Delta.',
        dateLabel: 'c. 1550 BC',
        sortKey: bc(1550),
      },
      {
        id: 'hatshepsut',
        title: 'Hatshepsut’s expedition to Punt',
        blurb: 'Ships sent by the female pharaoh return with incense, ebony, and living myrrh trees.',
        dateLabel: 'c. 1470 BC',
        sortKey: bc(1470),
      },
      {
        id: 'megiddo',
        title: 'Thutmose III at Megiddo',
        blurb: 'The pharaoh defeats a coalition of Canaanite cities at the pass of Megiddo.',
        dateLabel: 'c. 1457 BC',
        sortKey: bc(1457),
      },
      {
        id: 'akhenaten',
        title: 'Akhenaten founds Amarna',
        blurb: 'The king leaves Thebes for a new city devoted to the Aten.',
        dateLabel: 'c. 1348 BC',
        sortKey: bc(1348),
      },
      {
        id: 'tutankhamun',
        title: 'Tutankhamun is buried',
        blurb: 'The young king is laid in a small tomb in the Valley of the Kings.',
        dateLabel: 'c. 1323 BC',
        sortKey: bc(1323),
      },
    ],
  },
  {
    id: 'egypt-empire',
    title: 'From Kadesh to Rome',
    facts: [
      {
        id: 'kadesh',
        title: 'Battle of Kadesh',
        blurb: 'Ramesses II fights the Hittites to a standstill by the Orontes and later makes a treaty.',
        dateLabel: '1274 BC',
        sortKey: bc(1274),
      },
      {
        id: 'sea-peoples',
        title: 'Ramesses III and the Sea Peoples',
        blurb: 'Egypt turns back a seaborne invasion in the Delta and along the coast.',
        dateLabel: 'c. 1177 BC',
        sortKey: bc(1177),
      },
      {
        id: 'new-kingdom-end',
        title: 'The New Kingdom ends',
        blurb: 'Royal authority at Thebes fails, and Egypt splits among local rulers.',
        dateLabel: 'c. 1070 BC',
        sortKey: bc(1070),
      },
      {
        id: 'piye',
        title: 'Piye conquers Egypt',
        blurb: 'A Kushite king marches north from Napata and takes the Egyptian cities.',
        dateLabel: 'c. 727 BC',
        sortKey: bc(727),
      },
      {
        id: 'thebes-sacked',
        title: 'Ashurbanipal sacks Thebes',
        blurb: 'An Assyrian army loots the holy city and carries off its treasure.',
        dateLabel: '663 BC',
        sortKey: bc(663),
      },
      {
        id: 'cambyses',
        title: 'Cambyses conquers Egypt',
        blurb: 'The Persian king defeats Psamtik III and adds Egypt to the empire.',
        dateLabel: '525 BC',
        sortKey: bc(525),
      },
      {
        id: 'alexander-egypt',
        title: 'Alexander enters Egypt',
        blurb: 'He takes the country from the Persians and is welcomed as a liberator.',
        dateLabel: '332 BC',
        sortKey: bc(332, 11),
      },
      {
        id: 'rosetta',
        title: 'The Rosetta decree',
        blurb: 'Priests meeting at Memphis set down a decree for Ptolemy V in three scripts.',
        dateLabel: 'March 27, 196 BC',
        sortKey: bc(196, 3),
      },
      {
        id: 'cleopatra',
        title: 'Cleopatra dies',
        blurb: 'The last Ptolemaic ruler dies in Alexandria after the fall of Antony.',
        dateLabel: 'August 12, 30 BC',
        sortKey: bc(30, 8),
      },
      {
        id: 'roman-egypt',
        title: 'Egypt becomes a Roman province',
        blurb: 'Octavian annexes the country and governs it through a prefect.',
        dateLabel: '30 BC',
        sortKey: bc(30, 12),
      },
    ],
  },
];

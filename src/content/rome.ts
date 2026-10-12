import type { Round } from '@/content/types';

function bc(year: number, month: number): number {
  return -(year * 100) + month;
}

function ad(year: number, month = 0, day = 0): number {
  return year * 10000 + month * 100 + day;
}

export const romeRounds: Round[] = [
  {
    id: 'rome-principate',
    title: 'From Augustus to the crisis',
    facts: [
      {
        id: 'augustus',
        title: 'Augustus becomes the first emperor',
        blurb: 'The Senate grants Octavian the name Augustus and a standing place above the magistrates.',
        dateLabel: 'January 16, 27 BC',
        sortKey: bc(27, 1),
      },
      {
        id: 'teutoburg',
        title: 'Battle of the Teutoburg Forest',
        blurb: 'Arminius destroys three legions under Publius Quinctilius Varus.',
        dateLabel: 'September 9, AD 9',
        sortKey: ad(9, 9, 9),
      },
      {
        id: 'great-fire',
        title: 'The Great Fire of Rome',
        blurb: 'A fire burns through the city for days. Nero uses cleared ground for a new palace.',
        dateLabel: 'July 19, 64',
        sortKey: ad(64, 7, 19),
      },
      {
        id: 'temple',
        title: 'The Temple in Jerusalem is destroyed',
        blurb: 'Titus’s army takes the city and burns the Second Temple.',
        dateLabel: '70',
        sortKey: ad(70, 8),
      },
      {
        id: 'vesuvius',
        title: 'Vesuvius buries Pompeii',
        blurb: 'The eruption kills Pliny the Elder and seals the towns around the bay.',
        dateLabel: 'August 24, 79',
        sortKey: ad(79, 8, 24),
      },
      {
        id: 'trajan',
        title: 'Trajan dies at the empire’s widest reach',
        blurb: 'He dies in Cilicia after the eastern campaigns. The frontier is never again this large.',
        dateLabel: 'August 117',
        sortKey: ad(117, 8),
      },
      {
        id: 'hadrians-wall',
        title: 'Hadrian’s Wall is begun',
        blurb: 'A stone frontier is started across northern Britain during Hadrian’s visit.',
        dateLabel: '122',
        sortKey: ad(122),
      },
      {
        id: 'marcus-aurelius',
        title: 'Marcus Aurelius dies at Vindobona',
        blurb: 'The philosopher-emperor dies on the Danube. Commodus succeeds him.',
        dateLabel: 'March 17, 180',
        sortKey: ad(180, 3, 17),
      },
      {
        id: 'caracalla',
        title: 'Caracalla grants citizenship to free men',
        blurb: 'The Constitutio Antoniniana extends Roman citizenship across the free population of the empire.',
        dateLabel: '212',
        sortKey: ad(212),
      },
      {
        id: 'severus-alexander',
        title: 'Severus Alexander is killed',
        blurb: 'His own troops kill him near the Rhine. The long crisis of the third century begins.',
        dateLabel: 'March 235',
        sortKey: ad(235, 3),
      },
    ],
  },
  {
    id: 'rome-late',
    title: 'From Diocletian to Romulus Augustulus',
    facts: [
      {
        id: 'diocletian',
        title: 'Diocletian is proclaimed emperor',
        blurb: 'An officer from Dalmatia takes the purple and begins rebuilding the imperial office.',
        dateLabel: 'November 20, 284',
        sortKey: ad(284, 11, 20),
      },
      {
        id: 'milvian',
        title: 'Battle of the Milvian Bridge',
        blurb: 'Constantine defeats Maxentius outside Rome and enters the city.',
        dateLabel: 'October 28, 312',
        sortKey: ad(312, 10, 28),
      },
      {
        id: 'milan',
        title: 'The Edict of Milan',
        blurb: 'Constantine and Licinius agree to tolerate Christianity in their territories.',
        dateLabel: '313',
        sortKey: ad(313),
      },
      {
        id: 'nicaea',
        title: 'The Council of Nicaea',
        blurb: 'Bishops summoned by Constantine settle a creed for the church.',
        dateLabel: '325',
        sortKey: ad(325, 5),
      },
      {
        id: 'constantinople',
        title: 'Constantinople is dedicated',
        blurb: 'Constantine dedicates his new capital on the site of Byzantium.',
        dateLabel: 'May 11, 330',
        sortKey: ad(330, 5, 11),
      },
      {
        id: 'adrianople',
        title: 'Battle of Adrianople',
        blurb: 'Gothic cavalry destroys the eastern field army. The emperor Valens is killed.',
        dateLabel: 'August 9, 378',
        sortKey: ad(378, 8, 9),
      },
      {
        id: 'thessalonica',
        title: 'The Edict of Thessalonica',
        blurb: 'Theodosius I makes Nicene Christianity the official religion of the empire.',
        dateLabel: 'February 27, 380',
        sortKey: ad(380, 2, 27),
      },
      {
        id: 'theodosius-dies',
        title: 'Theodosius dies and the empire splits',
        blurb: 'His sons Arcadius and Honorius inherit the east and the west as separate courts.',
        dateLabel: 'January 17, 395',
        sortKey: ad(395, 1, 17),
      },
      {
        id: 'sack-410',
        title: 'The Visigoths sack Rome',
        blurb: 'Alaric’s army enters the city and plunders it for three days.',
        dateLabel: 'August 24, 410',
        sortKey: ad(410, 8, 24),
      },
      {
        id: 'romulus',
        title: 'Romulus Augustulus is deposed',
        blurb: 'Odoacer sets the boy-emperor aside and rules Italy without taking the imperial title.',
        dateLabel: '476',
        sortKey: ad(476, 9),
      },
    ],
  },
];

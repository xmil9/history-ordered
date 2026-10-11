export type Fact = {
  id: string;
  title: string;
  blurb: string;
  dateLabel: string;
  sortKey: number;
  revealNote?: string;
};

export type Round = {
  id: string;
  title: string;
  facts: Fact[];
};

export type Pack = {
  id: string;
  title: string;
  summary: string;
  rounds: Round[];
};

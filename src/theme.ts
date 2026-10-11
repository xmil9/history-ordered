export const theme = {
  desk: '#d7cfc3',
  paper: '#f4efe6',
  ink: '#1c1914',
  inkSoft: '#5e564c',
  grove: '#1b3a32',
  groveDeep: '#102420',
  brass: '#9a6430',
  brassSoft: '#c4925a',
  card: '#fffaf3',
  line: '#e4d7c6',
  correct: '#1d6b45',
  correctBg: '#e7f3ec',
  wrong: '#9d2c2c',
  wrongBg: '#f8e9e4',
};

export type FontChoice = {
  display: string;
  body: string;
  medium: string;
  semibold: string;
};

export const systemFonts: FontChoice = {
  display: 'serif',
  body: 'sans-serif',
  medium: 'sans-serif',
  semibold: 'sans-serif',
};

export const bundledFonts: FontChoice = {
  display: 'Fraunces_700Bold',
  body: 'Outfit_400Regular',
  medium: 'Outfit_500Medium',
  semibold: 'Outfit_600SemiBold',
};

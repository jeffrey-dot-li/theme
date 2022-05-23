import { projectColors, projectFonts } from '../theme-config';
import themeColors from './colors';

const replaceSpaces = (s: string, c = ''): string => s.replace(/\s+/g, c);
const formatWeights = (weights: readonly any[]): string => weights.length ? `:wght@${weights.join(';')}` : '';

export const googleFontsLink = `${Object.values(projectFonts).filter(v => v.fromGoogle).reduce(
  (prev, current) => `${prev}family=${replaceSpaces(current.name, '+')}${formatWeights(current.weights)}&`,
  'https://fonts.googleapis.com/css2?',
)}display=swap`;

export const colors = { ...projectColors, ...themeColors };

export const fontFamily = Object.fromEntries(Object.entries(projectFonts).map(([k, v]) => [k, [`'${v.name}'`, ...v.fallbacks]]));

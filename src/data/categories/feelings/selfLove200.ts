import { Shayari } from '../../../types/shayari';
import { buildUniqueShayaris } from './unique/helper';
import { SELF_LOVE_ENTRIES_1_TO_100 } from './selfLovePart1';
import { SELF_LOVE_ENTRIES_PART2 } from './selfLovePart2';

export const UNIQUE_SELF_LOVE_200: Shayari[] = buildUniqueShayaris(
  'self-love',
  'Self Love Shayari (सेल्फ लव शायरी)',
  '🪞',
  1,
  [...SELF_LOVE_ENTRIES_1_TO_100, ...SELF_LOVE_ENTRIES_PART2]
);

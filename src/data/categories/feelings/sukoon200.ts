import { Shayari } from '../../../types/shayari';
import { buildUniqueShayaris } from './unique/helper';
import { SUKOON_ENTRIES_PART1 } from './sukoonPart1';
import { SUKOON_ENTRIES_PART2 } from './sukoonPart2';

export const UNIQUE_SUKOON_200: Shayari[] = buildUniqueShayaris(
  'sukoon',
  'Sukoon Shayari (सुकून शायरी)',
  '🕊️',
  1,
  [...SUKOON_ENTRIES_PART1, ...SUKOON_ENTRIES_PART2]
);

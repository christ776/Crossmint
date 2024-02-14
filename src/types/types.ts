export const Megaverse = [
  'SPACE',
  'UP_COMETH',
  'DOWN_COMETH',
  'LEFT_COMETH',
  'RIGHT_COMETH',
  'POLYANET',
  'RED_SOLOON',
  'BLUE_SOLOON',
  'WHITE_SOLOON',
  'PURPLE_SOLOON',
] as const;

export type MegaverseKey = (typeof Megaverse)[number];

export function isMegaverse(value: string): value is MegaverseKey {
  return Object.values(Megaverse).includes(value as MegaverseKey);
}

export interface Point {
  row: number;
  column: number;
}

export type Direction = 'left' | 'right' | 'up' | 'down';

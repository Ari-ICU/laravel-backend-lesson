import { Part } from './types';
import { part1 } from './modules/part1';
import { part2 } from './modules/part2';
import { part3 } from './modules/part3';
import { part4 } from './modules/part4';

export * from './types';

export const curriculum: Part[] = [
  part1,
  part2,
  part3,
  part4
];

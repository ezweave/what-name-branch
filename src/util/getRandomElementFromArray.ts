import { flow, get, random } from 'lodash';

export const getRandomElementFromArray = <T>(array: T[]): () => T => flow(
  () => random(0, array.length - 1),
  (index: number) => get(array, index), 
);

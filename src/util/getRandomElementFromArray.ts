import { flow, get, random } from 'lodash';

export const getRandomElementFromArray = <T>(array: T[]): T => flow(
  (ar) => random(0, ar.length - 1),
  (index: number) => get(array, index), 
)(array);

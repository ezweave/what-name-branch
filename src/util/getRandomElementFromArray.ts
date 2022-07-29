import { flow, get, random } from 'lodash';
import { tap as tapFP } from 'lodash/fp';

export const getRandomElementFromArray = <T>(array: T[]): T => flow(
  (ar) => random(0, ar.length - 1),
  (index: number) => get(array, index), 
)(array);

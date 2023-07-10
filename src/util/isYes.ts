import { flow, toUpper } from 'lodash';
import { isEqual as isEqualFP } from 'lodash/fp';

interface IsYes {
  (answer: string): boolean
}

export const isYes: IsYes = flow(
  toUpper,
  isEqualFP('YES'),
);

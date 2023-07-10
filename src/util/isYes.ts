import { flow, head, toUpper } from 'lodash';
import { isEqual as isEqualFP, split as splitFP } from 'lodash/fp';

interface IsYes {
  (answer: string): boolean
}

export const isYes: IsYes = flow(
  toUpper,
  splitFP(''),
  head,
  isEqualFP('Y'),
);

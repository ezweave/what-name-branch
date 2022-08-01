import { flow, toLower } from 'lodash';
import { replace as replaceFP } from 'lodash/fp';
import { trim } from './trim';

interface ConvertDescription {
  (description: string): string,
}

export const convertDescription: ConvertDescription = flow(
  trim,
  toLower,
  replaceFP(/\s+/g, '-'),
  replaceFP(/[^\w-_]+/g, ''),
);

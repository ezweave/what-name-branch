import { flow, toLower } from 'lodash';
import { replace as replaceFP } from 'lodash/fp';

interface ConvertDescription {
  (description: string): string,
}

export const convertDescription: ConvertDescription = flow(
  toLower,
  replaceFP(/\s+/g, '-'),
  replaceFP(/[^\w-_]+/g, ''),
);

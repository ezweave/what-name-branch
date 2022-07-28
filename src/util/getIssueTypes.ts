import { flow, values, toUpper } from 'lodash';
import { map as mapFP } from 'lodash/fp';

import { IssueType } from '@ezweave/types';

export const getIssueTypes = () => flow(
  values,
  mapFP(toUpper),
)(IssueType);



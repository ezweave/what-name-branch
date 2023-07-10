import { flow, toUpper } from 'lodash';
import { Issue } from '../types';
import { convertDescription } from './convertDescription';
import { trim } from './trim';

export interface GenerateBranchName {
  (issue: Issue): string,
}

const convertName = flow(
  trim,
  toUpper,
);

export const generateBranchName: GenerateBranchName = ({
  description,
  name,
  type,
}) => `${type}/${convertName(name)}/${convertDescription(description)}`;

import { toUpper } from 'lodash';
import { Issue } from '../types';
import { convertDescription } from './convertDescription';

interface GenerateBranchName {
  (issue: Issue): string,
}
 
export const generateBranchName: GenerateBranchName = ({
  description,
  name,
  type,
}) => `${type}/${toUpper(name)}/${convertDescription(description)}`;

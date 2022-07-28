import { Issue } from '@ezweave/types';
import { flow } from 'lodash';
import { buildResponse } from './buildResponse';
import { generateBranchName } from './generateBranchName';

interface GenerateBranchNameAndResponse {
  (issue: Issue): string
}

export const generateBranchNameAndResponse: GenerateBranchNameAndResponse = flow(
  generateBranchName,
  buildResponse,  
);

import { flow } from 'lodash';
import { Issue } from '../types';
import { buildResponse } from './buildResponse';
import { generateBranchName } from './generateBranchName';

interface GenerateBranchNameAndResponse {
  (issue: Issue): string
}

// Jest has issues with not capturing the issue as lexical scope... it makes no sense
export const generateBranchNameAndResponse: GenerateBranchNameAndResponse = (issue) => flow(
  generateBranchName,
  buildResponse,  
)(issue);

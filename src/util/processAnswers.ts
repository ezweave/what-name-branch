import { toLower } from 'lodash';
import { IssueType, Logger } from '../types';

import { generateBranchNameAndResponse } from './generateBranchNameAndResponse';

interface Answer {
  description: string,
  name: string,
  type: keyof typeof IssueType,
}

export const processAnswers = ({
  description,
  name,
  type,
}: Answer, log: Logger = console.warn) => {
  const response = generateBranchNameAndResponse({
    description,
    name,
    type: toLower(type) as IssueType,
  });
  log(response);
  return response;
}; 

import { IssueType } from '@ezweave/types';
import { toLower } from 'lodash';

import { generateBranchNameAndResponse } from './generateBranchNameAndResponse';

interface Answer {
  description: string,
  name: string,
  type: keyof typeof IssueType,
}

interface Logger {
  (message?: any, ...optionalParams: any[]): void
}

export const processAnswers = ({
  description,
  name,
  type,
}: Answer, log: Logger = console.warn) => {
  const response = generateBranchNameAndResponse({
    description,
    name,
    type: toLower(type),
  });
  log(response);
  return response;
}; 

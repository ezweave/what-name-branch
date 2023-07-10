import { toLower } from 'lodash';
import { IssueType, Logger } from '../types';

import { MaybeCreateBranch, maybeCreateBranch } from './maybeCreateBranch';
import { generateBranchName, GenerateBranchName } from './generateBranchName';
import { buildResponse } from './buildResponse';

interface Answer {
  description: string,
  name: string,
  type: keyof typeof IssueType,
  create: 'YES' | 'NO',
}

export const processAnswers = ({
  description,
  name,
  type,
  create,
}: Answer,
log: Logger = console.warn,
maybeCreateBranchFunction: MaybeCreateBranch = maybeCreateBranch(),
generateBranchNameFunc: GenerateBranchName = generateBranchName) => {
  const branchName = generateBranchNameFunc({
    description,
    name,
    type: toLower(type) as IssueType,
  });
  const branchCreated = maybeCreateBranchFunction(create, branchName);
  const response = branchCreated !== false ? buildResponse(branchCreated, false) : buildResponse(branchName);
  log(response);
  return response;
}; 

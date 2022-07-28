import inquirer from 'inquirer';
import { toLower } from 'lodash';

import { IssueType } from './types';
import { generateBranchNameAndResponse, getIssueTypes } from './util';

const questions = [{
  type: 'input',
  name: 'name',
  message: 'What is the name of issue? (e.g. "PROJ-123")',
}, {
  type: 'list',
  name: 'type',
  message: 'What type of issue is this?',
  choices: getIssueTypes(), 
}, {
  type: 'input',
  name: 'description',
  message: 'What is the description?', 
}];

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
  const branchName = generateBranchNameAndResponse({
    description,
    name,
    type: toLower(type),
  });
  log(`Your branch name is: ${branchName}`);
  return branchName;
}; 

if (require.main === module) {
  inquirer.prompt(questions).then(processAnswers);
}

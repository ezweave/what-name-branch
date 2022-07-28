import inquirer from 'inquirer';

import { IssueType } from './types';
import { generateBranchName, getIssueTypes } from './util';

const questions = [{
  type: 'input',
  name: 'name',
  message: 'What is the name of issue? (e.g. "PROJ-123")'
}, {
  type: 'list',
  name: 'type',
  message: 'What type of issue is this?',
  choices: getIssueTypes(), 
}, {
  type: 'input',
  name: 'name',
  message: 'What is the description?' 
}];

if (require.main === module) {
  inquirer.prompt(questions).then((answers) => {
    console.warn('ANSWERS', answers);
  });
}

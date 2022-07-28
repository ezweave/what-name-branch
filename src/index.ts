import inquirer from 'inquirer';

import { IssueType } from "./types";
import { generateBranchName } from "./util";

const questions = [
  'What is the name of issue? (e.g. "PROJ-123"',
  'What type of issue is this?',
  'What is the description?'
]

if (require.main === module) {
  const branchName = generateBranchName({
    description: 'Error Handling Enhancements',
    name: 'ZEP-681',
    type: IssueType.STORY
  })
  console.warn(branchName);
  inquirer.prompt(questions).then((answers) => {
    console.warn('ANSWERS', answers)
  })
}

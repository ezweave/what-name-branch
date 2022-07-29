import { getIssueTypes } from '../util';

export const Questions = [{
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

import inquirer from 'inquirer';
import { Questions } from './constants';
import { processAnswers } from './util';

if (require.main === module) {
  inquirer.prompt(Questions).then(processAnswers);
}

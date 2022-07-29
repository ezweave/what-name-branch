import inquirer from 'inquirer';
import { Questions } from './constants';
import { printBanner, processAnswers } from './util';

if (require.main === module) {
  printBanner();
  inquirer.prompt(Questions).then(processAnswers);
}

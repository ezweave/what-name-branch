import chalk from 'chalk';

import { Emojis, Presponses, Responses } from '../constants';
import { getRandomElementFromArray } from './getRandomElementFromArray';

export const buildResponse = (
  branchName: string,
): string => `
${chalk.green(getRandomElementFromArray(Presponses))}
${chalk.bgWhite.blue('Your branch name is:')} ${branchName}
${getRandomElementFromArray(Responses)}${getRandomElementFromArray(Emojis)}`;

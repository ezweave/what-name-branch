import chalk from 'chalk';

import { Emojis, Presponses, Responses } from '../constants';
import { getRandomElementFromArray } from './getRandomElementFromArray';

export const buildResponse = (
  text: string,
  branchName: boolean = true,
): string => branchName ? `
${chalk.green(getRandomElementFromArray(Presponses))}
${chalk.bgWhite.blue('Your branch name is:')} ${text}
${getRandomElementFromArray(Responses)}${getRandomElementFromArray(Emojis)}` : `
${chalk.green(getRandomElementFromArray(Presponses))}
${chalk.bgWhite.blue(text)}
${getRandomElementFromArray(Responses)}${getRandomElementFromArray(Emojis)}`;

import chalk from 'chalk';

import { Emojis, Presponses, Responses } from '@ezweave/constants';
import { getRandomElementFromArray } from './getRandomElementFromArray';

const getRandomEmoji = getRandomElementFromArray(Emojis);
const getRandomPresponse = getRandomElementFromArray(Presponses);
const getRandomResponse = getRandomElementFromArray(Responses);

export const buildResponse = (
  branchName: string,
): string => `${chalk.green(getRandomPresponse())}
${chalk.bgWhite.blue('Your branch name is:')}' '${branchName}
${getRandomResponse()}${getRandomEmoji()}`;

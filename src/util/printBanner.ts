import { Logger } from '@ezweave/types';
import chalk from 'chalk';
import figlet from 'figlet';
import { flow } from 'lodash';

interface PrintBanner {
  (log?: Logger): void
}

export const printBanner: PrintBanner = (log = console.log) => flow(
  chalk.bgBlue,
  text => figlet.textSync(text, { horizontalLayout: 'full' }),
  log,
)('what-name-branch?');

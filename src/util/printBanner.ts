import { Logger } from '@ezweave/types';
import chalk from 'chalk';
import figlet from 'figlet';
import { flow } from 'lodash';

interface PrintBanner {
  (log?: Logger): void
}

export const printBanner: PrintBanner = (log = console.log) => flow(
  text => figlet.textSync(text, { 
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  }),
  chalk.bgBlue,
  log,
)('what-name?');

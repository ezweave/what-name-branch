import chalk from 'chalk';
import figlet from 'figlet';
import { flow } from 'lodash';
import { Logger } from '../types';
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

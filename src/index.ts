#!/usr/bin/env node
import { program } from 'commander';
import * as Commands from './commands';

program.name('fixer-cli').version('1.0.0');

program
  .command('key')
  .argument('<key>', 'key for Fixer API')
  .action(Commands.key);

program
  .command('info')
  .option('--list', 'list of available currencies')
  .action(Commands.info);

program
  .command('convert')
  .argument('<currency>', 'currency')
  .argument('<base_currency>', 'base currency')
  .argument('[amount]', 'amount', 1)
  .action(Commands.convert);

program.parse();

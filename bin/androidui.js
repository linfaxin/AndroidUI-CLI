#!/usr/bin/env node

require('commander')
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('create', 'generate a new project from a template')
    .command('list', 'list available official templates')
    .parse(process.argv);
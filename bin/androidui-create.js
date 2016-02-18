#!/usr/bin/env node

var program = require('commander');
var chalk = require('chalk');
var fs = require('fs');
var child_process = require('child_process');
var package = require('../package');

/**
 * Usage.
 */

program.usage('<template-name> [project-name]');

/**
 * Help.
 */

program.on('--help', function () {
    console.log('  Examples:');
    console.log();
    console.log(chalk.gray('    # create a new project with default template'));
    console.log('    $ androidui create');
    console.log();
});

/**
 * Padding.
 */

console.log();
process.on('exit', function () {
    console.log();
});


/**
 * Settings.
 */
program.parse(process.argv);
var template = program.args[0] || 'default';


console.log('downloading templates...');
child_process.exec('npm install ' + package.name, function(err,stdout,stderr){

    var templateCommonDir = `node_modules/${package.name}/templates/_common`;
    var templateDir = `node_modules/${package.name}/templates/${template}`;
    if(!fs.existsSync(templateDir)){
        console.error(`template ${template} not found!`);
        return;
    }
    child_process.exec(`cp -r ${templateCommonDir}/* ${templateDir}/* ./`);
    console.log('downloading project dependencies...');
    child_process.exec('npm install', function(err,stdout,stderr){
        console.log('build project...');
        child_process.exec(`cp -r node_modules/androidui-webapp/dist/* androidui-sdk/`);
        child_process.exec('npm run build');
        console.log('create project finish');
    });
});





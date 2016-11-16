#!/usr/bin/env node

var program = require('commander');
var chalk = require('chalk');
var fs = require('fs');
var fse = require('fs-extra');
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


console.log('downloading templates...');
child_process.exec(`npm install ${package.name} --registry=https://registry.npm.taobao.org`, function(err,stdout,stderr){
    if (err) {
        console.error(`exec error: ${err}`);
        console.log('stderr:\n' + stderr);
        console.log('stdout:\n' + stdout);
        return;
    }

    var androiduicli = require(package.name);
    androiduicli.create(program.args, package);
});





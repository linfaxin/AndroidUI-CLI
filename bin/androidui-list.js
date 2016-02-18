#!/usr/bin/env node

var chalk = require('chalk');
var fs = require('fs');
var child_process = require('child_process');

var package = require('../package');

/**
 * Padding.
 */

console.log();
process.on('exit', function () {
    console.log();
});

console.log('  Loading templates...');

child_process.exec('npm install ' + package.name, function(err,stdout,stderr){

    console.log('  Available official templates:');
    var files = fs.readdirSync(`node_modules/${package.name}/templates`);
    files.forEach(function(fileName){
        if(fileName.startsWith('_')) return;
        console.log(
            '  ' + chalk.yellow('★') +
            '  ' + chalk.blue('') +
            ' - ' + fileName);
    });
});

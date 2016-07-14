#!/usr/bin/env node

var program = require('commander');
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

program.parse(process.argv);
child_process.exec('npm install ' + package.name, function(err,stdout,stderr){
    if (err) {
        console.error(`exec error: ${err}`);
        console.log('stderr:\n' + stderr);
        console.log('stdout:\n' + stdout);
        return;
    }

    var androiduicli = require(`node_modules/${package.name}`);
    androiduicli.list(program.args, package);
});

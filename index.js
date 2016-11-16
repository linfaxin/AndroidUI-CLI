
var program = require('commander');
var chalk = require('chalk');
var fs = require('fs');
var fse = require('fs-extra');
var child_process = require('child_process');
var package = require('./package');


module.exports = {
    create : function (args, globalPackageInfo) {
        var template = (args && args[0]) ? args[0] : 'default';
        var templateCommonDir = `node_modules/${package.name}/templates/_common`;
        var templateDir = `node_modules/${package.name}/templates/${template}`;
        if(!fs.existsSync(templateDir)){
            console.error(`template ${template} not found`);
            return;
        }

        try {
            fse.copySync(templateCommonDir, './');
            fse.copySync(templateDir, './');
        } catch (err) {
            console.error(err)
        }

        console.log('downloading project dependencies...');
        child_process.exec('npm install --registry=https://registry.npm.taobao.org', function(err,stdout,stderr) {
            if (err) {
                console.error(`exec error: ${err}`);
                console.log('stderr:\n' + stderr);
                console.log('stdout:\n' + stdout);
                return;
            }

            console.log('build project...');

            try {
                fse.copySync('node_modules/androiduix/dist', 'androidui-sdk/');
            } catch (err) {
                console.error(err)
            }

            child_process.exec('npm run build', function (err,stdout,stderr) {
                if (err) {
                    console.error(`exec error: ${err}`);
                    console.log('stderr:\n' + stderr);
                    console.log('stdout:\n' + stdout);
                    return;
                }

                console.log('create project finish');
            });
        });
    },
    list : function (args, globalPackageInfo) {
        console.log('  Available official templates:');
        var files = fs.readdirSync(`node_modules/${package.name}/templates`);
        files.forEach(function(fileName){
            if(fileName.startsWith('_')) return;
            console.log(
                '  ' + chalk.yellow('★') +
                '  ' + chalk.blue('') +
                ' - ' + fileName);
        });
    }
};
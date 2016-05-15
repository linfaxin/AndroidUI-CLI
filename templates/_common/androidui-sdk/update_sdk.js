/**
 * Created by linfaxin on 16/5/14.
 */

var fs = require('fs');
var child_process = require('child_process');
var path = require("path");

function rmdir(dir) {
    var list = fs.readdirSync(dir);
    for(var i = 0; i < list.length; i++) {
        var filename = path.join(dir, list[i]);
        var stat = fs.statSync(filename);

        if(filename == "." || filename == "..") {
            // pass these files
        } else if(stat.isDirectory()) {
            // rmdir recursively
            rmdir(filename);
        } else {
            // rm fiilename
            fs.unlinkSync(filename);
        }
    }
    fs.rmdirSync(dir);
}

rmdir('../node_modules/androidui-webapp');
child_process.exec('npm install androidui-webapp --save-dev', function(err,stdout,stderr){
    var path = "../node_modules/androidui-webapp/dist/";
    var files = fs.readdirSync(path);
    files.forEach(function(fileName){
        fs.writeFileSync('./'+fileName, fs.readFileSync(path + '/' + fileName));
    });
});
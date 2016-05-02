@echo off

::init node_modules, include typescript & babel, you can ignore this line if you already installed and don't wan't check new version
echo "installing dependencies"
call npm install


:: pack resources into js. Ensure you have installed nodejs: http://www.nodejs.org
echo "building resource"
call node build_res.js

:: convert typescript into es6. Ensure you have installed typescript: http://www.typescriptlang.org/
echo "converting TypeScript to ES6"
call node_modules/.bin/tsc -p ./

:: convert es6 file to es5 file. Ensure you have installed babel: https://babeljs.io/
echo "converting ES6 to ES5"
call node_modules/.bin/babel build/app.js --out-file build/app.es5.js --source-maps --presets=es2015

echo "build finish"

pause

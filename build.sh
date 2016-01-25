# App package name, your resources will build under it, like: sample.app.R.image.xxx / sample.app.R.layout.xxx
packageName="my.app";

# sdk path relate with gen/R/xxx.ts
dReference="../../androidui-sdk/android-ui.d.ts";


#== don't modify below code ==

#init node_modules, include typescript & babel
npm install

# pack resources into js. Ensure you have installed nodejs: http://www.nodejs.org
node build_res.js $packageName $dReference

# convert typescript into es6. Ensure you have installed typescript: http://www.typescriptlang.org/
node_modules/.bin/tsc -p ./

# convert es6 file to es5 file. Ensure you have installed babel: https://babeljs.io/
node_modules/.bin/babel build/app.js --out-file build/app.es5.js --source-maps --presets=es2015
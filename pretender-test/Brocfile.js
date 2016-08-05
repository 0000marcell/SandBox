const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');
const mergeRecursive = require('broccoli-merge-recursive');
const babel = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

// COMPILE BOWER
const bowerPaths = mergeRecursive('./bower_components/**/*.js');
const bower = mergeTrees(bowerPaths, { overwrite: true });
const bowerTranspiled = babel(bower, {
	moduleIds: true,
	modules: 'amd'	
});

const bowerDependencies = concat(bowerTranspiled, {
	inputFiles: ['**/*.js'],
	outputFile: '/bower.js'
});

//COMPILE LIB
const lib = babel('src/lib', {
	moduleIds: true,
	modules: 'amd'
});

const libDependencies = concat(lib, {
	inputFiles: ['**/*.js'],
	outputFile: '/lib.js'
});

//COMPILE APP 
const indexHtml = funnel('src', {
	files: ['index.html']
});

const src = funnel('src', {
  files: ['index.js']
});

const app = concat(src, {
	inputFiles: ['**/*.js'],
	outputFile: '/index.js'
});

module.exports = mergeTrees([app, bowerDependencies, libDependencies, indexHtml]);

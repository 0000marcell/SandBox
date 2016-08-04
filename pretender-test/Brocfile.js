const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');
const babel = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

const indexHtml = funnel('src', {
	files: ['index.html']
});

const src = funnel('src', {
  files: ['index.js']
});

const lib = funnel('src/lib', {
	files: ['doit.js', 'math.js']
});

const dependenciesTranspiled = babel(lib, {
	moduleIds: true,
	modules: 'amd',
});

const dependencies = concat(dependenciesTranspiled, {
	inputFiles: ['**/*.js'],
	outputFile: '/bundle.js'
});

const app = concat(src, {
	inputFiles: ['**/*.js'],
	outputFile: '/index.js'
})

//module.exports = mergeTrees([main, indexHtml]);
module.exports = mergeTrees([app, dependencies, indexHtml]);

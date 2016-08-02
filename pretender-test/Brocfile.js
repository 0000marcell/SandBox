const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

const src = 'src';
const bower = 'bower_components/pretender';

const indexHtml = funnel(src, {
  files: ['index.html', 'require.js']
});

const js = esTranspiler(bower, {
  stage: 0,
  moduleIds: true,
  modules: 'amd'
});

const main = concat(js, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/modules.js'
});
//module.exports = mergeTrees([main, indexHtml]);
module.exports = mergeTrees([main]);

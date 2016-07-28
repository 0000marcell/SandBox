/* Brocfile.js */
var compileES6 = require('broccoli-es6-concatenator')
var pickFiles = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')


// create tree for files in the app folder
var app = 'app'
app = pickFiles(app, {
  srcDir: '/',
  destDir: 'app' // move under app namespace
})

// include app, styles and vendor trees
var sourceTrees = [app]

// merge array into tree
var appAndDependencies = new mergeTrees(sourceTrees, { overwrite: true })

// Transpile ES6 modules and concatenate them,
// recursively including modules referenced by import statements.
var appJs = compileES6(appAndDependencies, {
  // Prepend contents of vendor/loader.js
  //loaderFile: 'loader.js',
  inputFiles: [
    'app/**/*.js'
  ],
  outputFile: '/assets/app.js'
})

var publicFiles = 'public'

// merge js, css and public file trees, and export them
module.exports = mergeTrees([appJs, publicFiles])

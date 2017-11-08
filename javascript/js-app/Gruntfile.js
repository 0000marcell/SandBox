module.exports = function(grunt) { 
  grunt.initConfig({
    // JSHint configuration options.
    jshint: { 
      all: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        esversion: 6,
        browser: false, 
        node: true, 
        strict: false, 
        curly: true, 
        eqeqeq: true, 
        immed: true, 
        latedef: true, 
        newcap: true, 
        nonew: true, 
        noarg: true, 
        sub: true, 
        undef: true, 
        unused: true, 
        eqnull: true, 
        boss: false
      }
    },
    qunit: {
      browser: ['test/index.html']
    },
    browserify: {
      client: {
        src: ['src/**/*.js'],
        dest: 'public/app.js'
      }
    }
  }); 
  // Load browserify tasks. Needed for bundling.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Setup command line argument tasks. For e.g.:
  // $ grunt # executes lint, browserify, qunit
  // $ grunt test # runs qunit task, only. 
  grunt.registerTask('test', 'qunit');
  grunt.registerTask('install', 'browserify'); 
  grunt.registerTask('default', ['jshint', 'browserify', 'qunit']); 
};

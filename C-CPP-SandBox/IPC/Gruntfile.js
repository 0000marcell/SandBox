module.exports = function(grunt) {
  grunt.initConfig({
    nwjs: {
      options: {
        version: '0.12.2',
        platforms: ['osx'],
        buildDir: 'build',
      },
      src: 'public/**/*' // Your node-webkit app
    },
  });
  grunt.loadNpmTasks('grunt-nw-builder');
  grunt.registerTask('default', ['nwjs']);
};
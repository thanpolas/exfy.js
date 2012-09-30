/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-closure-tools');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    closureDepsWriter: {
       // any name that describes your operation
      targetName: {
        closureLibraryPath: 'closure-library', // path to closure library

        options: {
          root_with_prefix: ['"src ../../../src"', '"assets/js ../../../assets/js"']
        },
        output_file: 'build/deps.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'closureDepsWriter');

};

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      files: ['**/*.html', 'js/**/*.js', 'css/**/*.css'],
      options: {
        livereload: true
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.'),
            ];
          }
        }
      }
    },

    clean: {
      dist: ['dist']
    },

    copy: {
      dist: {
        files: [
          {expand: true, src: ['img/**', 'css/**', '*.html'], dest: 'dist/'}
        ]        
      }
    },

  });

  grunt.registerTask('server', ['connect:livereload', 'watch']);
  grunt.registerTask('dist', ['clean:dist', 'copy:dist']);

  [
    'grunt-contrib-watch', 
    'grunt-contrib-connect', 
    'grunt-contrib-copy', 
    'grunt-contrib-clean'
  ].forEach(function(module) {
    grunt.loadNpmTasks(module);
  });

};
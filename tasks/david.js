module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('david', 'Check Dependencies', function() {

    var done = this.async();
    var exec = require("child_process").exec;
    var command = __dirname + "/../node_modules/.bin/david";

    exec(command, function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      done();
    });

  });

};

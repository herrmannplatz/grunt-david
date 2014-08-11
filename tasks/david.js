module.exports = function(grunt) {
  'use strict';

  function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  }

  grunt.registerMultiTask('david', 'Check Dependencies', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      update: false,
      unstable: false,
      registry: null
    });

    var path = __dirname + '/../node_modules/.bin/';
    var command = 'david';

    // Update all your project dependencies to the latest stable versions
    if(options.update === true) {
      command += ' --update';
    }

    // Update all your project dependencies to the latest versions (including unstable versions)
    if(options.unstable === true) {
      command += ' --unstable';
    }

    // Use an alternate registry
    if(isString(options.registry)) {
      command += ' --registry ' + options.registry;
    }

    // Log david command
    grunt.log.writeln('Checking: ' + command)

    var exec = require('child_process').exec;
    exec(path+command, function(error, stdout, stderr) {
      grunt.log.writeln(stdout);
      grunt.log.writeln(stderr);
      if (error !== null) {
        grunt.log.error('error while checking dependencies: ' + error);
      }
      done();
    });

  });

};

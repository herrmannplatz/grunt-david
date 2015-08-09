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
      registry: null,
      error404: false,
      errorSCM: false
    });

    var path = __dirname + '/../node_modules/.bin/';
    var command = 'david';
    var flags = [];

    // Update all your project dependencies to the latest stable versions
    if(options.update === true) {
      flags.push('--update');
    }

    // Update all your project dependencies to the latest versions (including unstable versions)
    if(options.unstable === true) {
      flags.push('--unstable');
    }

    // Use an alternate registry
    if(isString(options.registry)) {
      flags.push('--registry', options.registry);
    }

    // Throw an error and exit, if you have dependencies that are not published to npm
    if(options.error404 === true) {
      flags.push('--error404');
    }

    // Throw an error and exit, if you have dependencies whose versions are SCM URLs
    if(options.errorSCM === true) {
      flags.push('--errorSCM');
    }

    // Log david command
    var fullCommand = command + ' ' + flags.join(' ');
    grunt.log.writeln('Checking: ' + fullCommand + '\n');

    var davidCmd = require('child_process').spawn(path + command, flags, {
      stdio: 'inherit'
    });

    davidCmd.on('close', function(code) {
      if (code !== 0) {
        grunt.log.error('Command (' + fullCommand + '): exited with code ' + code);
      }
      done();
    });

  });

};

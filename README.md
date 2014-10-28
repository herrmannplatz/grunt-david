# grunt-david

> Watching your node.js dependencies.



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-david --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-david');
```




## David task
_Run this task with the `grunt david` command._

Keep your node.js dependencies up to date.
### Options

#### update
Type: `Boolean`
Default: `false`

Turn on if you want to update all your project dependencies to the latest stable versions.

#### unstable
Type: `Boolean`
Default: `false`

Turn on if you want to update all your project dependencies to the latest versions (including unstable versions)

#### registry
Type: `String`
Default: `undefined`

Use an alternate registry

#### warn404
Type: `Boolean`
Default: `false`

Turn on if you want David not to abort if any errors are found. Error messages are then included in the report.

### Usage examples

#### Update dependencies

```js
// Project configuration.
grunt.initConfig({
  david: {
    all: {
      options: {
        update: true
      }
    }
  }
});
```

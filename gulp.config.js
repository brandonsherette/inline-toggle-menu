module.exports = function() {
  'use strict';

  var client = './src/client/';
  var clientPlugin = client + 'plugin/';
  var clientApp = client + 'app/';
  var server = './src/server/';
  var report = './report/';
  var root = './';
  var specRunnerFile = 'specs.html';
  var temp = './.tmp/';
  var wiredep = require('wiredep');
  var bowerFiles = wiredep({devDependencies: true})['js'];
  var bower = {
    json: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '../..'
  };
  var nodeModules = 'node_modules';

  var config = {
    /* FILE PATHS */
    // all javascript that we want to vet
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    build: './build/',
    client: client,
    css: temp + 'styles.css',
    fonts: bower.directory + 'font-awesome/fonts/**/*.*',
    html: client + '**/*.html',
    htmlTemplates: clientApp + '**/*.html',
    images: client + 'images/**/*.*',
    index: client + 'index.html',
    // all js with no spec files
    js: [
      clientApp + '**/*.js',
      clientPlugin + '**/*.js',
      '!' + clientApp + '**/*.spec.js',
      '!' + clientPlugin + '**/*.spec.js'
    ],
    jsOrder: [
      '**/*.js'
    ],
    less: [client + 'styles/**/*.less', clientPlugin + 'styles/**/*.less'],
    report: report,
    root: root,
    server: server,
    source: 'src/',
    temp: temp,
    /* End Paths */

    /* Browser Sync */
    browserReloadDelay: 1000,

    /* Bower and NPM Files */
    bower: bower,
    packages: [
      './package.json',
      './bower.json'
    ],

    /* Spec Files */
    specRunner: client + specRunnerFile,
    specRunnerFile: specRunnerFile,

    /* Spec Injections */
    testlibraries: [
      nodeModules + '/qunitjs/qunit/qunit.js',
      nodeModules + '/mocha/mocha.js',
      nodeModules + '/chai/chai.js',
      nodeModules + '/sinon-chai/lib/sinon-chai.js'
    ],
    specs: [clientPlugin + '**/*.spec.js'],

    /* Node Settings */
    nodeServer: server + 'app.js',
    defaultPort: '8001'
  };

  /* Config Functions */
  /**
   * Wiredep and Bower Settings.
   * @return {PlainObject} the default options for wiredep injection with bower.
   */
  config.getWiredepDefaultOptions = function() {
    return {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
  };

  /**
   * Karma Settings
   */
  config.karma = getKarmaOptions();

  return config;
  ////////////////////////

  function getKarmaOptions() {
    var options = {
      files: [].concat(
        bowerFiles,
        clientApp + '**/*.js'
      ),
      exclude: [],
      coverage: {
        dir: report + 'coverage',
        reporters: [
          // reporters not supporting the `file` property
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          { type: 'text-summary' } //, subdir: '.', file: 'text-summary.txt'}
        ]
      },
      preprocessors: {}
    };
    options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
    return options;
  }
};

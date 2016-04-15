Package.describe({
  name: 'hcvst:angular-markdown',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Meteor package for an AngularJS directive to render markdown using evilstreak/markdown-js.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hcvst/angular-markdown',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('angular-markdown.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hcvst:angular-markdown');
  api.mainModule('angular-markdown-tests.js');
});

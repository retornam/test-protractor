exports.config = {
  framework: 'jasmine2',
  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../e2e/specs/*.spec.js'],
  suites: {
    smoke: '../e2e/specs/test.spec.js',
    full: '../e2e/specs/functional/*.spec.js',
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
  }
};

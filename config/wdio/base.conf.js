
require('module-alias/register');
const videoRecorder = require('selenium-js-video-recorder');
require('@babel/register')({
  presets: [[
    '@babel/preset-env',
    { targets: { node: 10 } },
  ]],
  babelrc: false,
});

const rec = videoRecorder.getHooks({
  saveAllVideos: false,  // If true, also saves videos for successful test cases
  videoSlowdownMultiplier: 5,  // Higher to get slower videos, lower for faster videos [Value 1-100]
});


const config = {
  // =============================
  //        Base Options
  // =============================
  baseURL: 'http://localhost:8080',
  specs: [
    './src/test-e2e/**/*.e2e.js',
  ],
  framework: 'jasmine',
  jasmineNodeOpts: {
      defaultTimeoutInterval: 100000,
  },
  sync: true,
  bail: 0,
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
    },
  ],
  runner: 'local',
  services: undefined,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  // =============================
  //      Console options
  // =============================
  logLevel: 'info',
  coloredLogs: true,
  deprecationWarnings: true,
  
  // =============================
  //      Reporter options
  // =============================
  screenshotPath: './e2e/errorShots/',
  outputDir: './e2e/results/',
  reporters: [
    'spec',
    ['allure', {
      outputDir: './e2e/results/allure-raw/',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true, // Must be set to true
    }],
  ],

  // =============================
  // Hooks bound to video recorder
  // =============================
  beforeTest: (test) => {
    rec.beforeTest(browser, test, config);
  },
  afterCommand: (commandName, args, result, error) => {
    rec.afterCommand(browser, commandName, args, config);
  },
  afterTest: (test) => {
    rec.afterTest(browser, test, config);
  },
  onComplete: (exitCode, config, capabilities) => {
    rec.onComplete(config);
  },
};

module.exports = {
  config,
};

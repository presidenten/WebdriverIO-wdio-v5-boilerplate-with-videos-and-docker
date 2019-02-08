
require('module-alias/register');
require('@babel/register')({
  presets: [[
    '@babel/preset-env',
    { targets: { node: 8 } },
  ]],
  babelrc: false,
});

const video = require('wdio-video-reporter');

const config = {
  // =============================
  //      Reporter options
  // =============================
  outputDir: './_results_',
  reporters: [
    'spec',
    [video, {
      saveAllVideos: false,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
      videoRenderTimeout: 5,      // Max seconds to wait for a video to finish rendering
    }],
    ['allure', {
      outputDir: './_results_/allure-raw',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }],
  ],

  // =============================
  //      Console options
  // =============================
  logLevel: 'info', // trace | debug | info | warn | error | silent
  coloredLogs: true,
  deprecationWarnings: true,
  

  // =============================
  //        Base Options
  // =============================
  baseURL: 'http://localhost:8080',
  specs: [
    './src/scenarios/**/*.e2e.js',
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
};

module.exports = {
  config,
};

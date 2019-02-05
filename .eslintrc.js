module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'function-paren-newline': 0,
    'no-multi-spaces': 0,
    'object-curly-newline': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'no-unused-vars': 1,
    'no-plusplus': 0,
    'prefer-template': 0,
    'import/no-extraneous-dependencies': 0,
    // don't require .vue extension when importing
    'import/extensions': 0,
    'class-methods-use-this': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': ["warn", 140, { "ignoreComments": true }]
  },
  globals:{
    document: true,
    jasmine: true,
    jest: true,

    describe: true,
    fdescribe: true,
    xdescribe: true,

    it: true,
    fit: true,
    xit: true,

    expect: true,
    spyOn: true,

    beforeEach: true,
    afterEach: true,

    browser: true,
  },
};


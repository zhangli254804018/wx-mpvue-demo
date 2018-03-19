// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'arrow-spacing':0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-mixed-spaces-and-tabs': 0,
    'eol-last': 0,
    'no-tabs':0,
    'semi': 0,
    "indent": 0,
    "no-undef": 0,
    "spaced-comment": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "no-unused-vars": 0,
    "no-dupe-keys": 0,
    "no-console": 0,
    "no-irregular-whitespace": 0,
    'no-redeclare': 0,
    'quotes':0,
    'no-unneeded-ternary':0
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true
  }
}

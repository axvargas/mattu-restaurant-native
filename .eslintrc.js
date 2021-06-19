module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'react-native/react-native': true
    //"es6": true,
    //"node": true,
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'rules': {
    'max-len': ['error', {
      'code': 90,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'react/display-name': 'off',
    'object-property-newline': ['error'],
    'semi': 'error',
    'comma-dangle': ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-extra-semi': 'error',
    'no-shadow': ['error', { 'allow': ['err', 'cb'] }],
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'keyword-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 2,
      'maxEOF': 1 }],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'beforeColon': false }],
    'callback-return': ['error', ['done', 'callback']],
    'no-console': ['error', { 'allow': ['warn', 'error', 'log'] }],
    'no-else-return': ['error', { 'allowElseIf': false }],
    'react/prop-types': 0,
    'no-undef': 'off',
    'no-useless-escape': 'off',
    //"react-native/no-unused-styles": 2,
    'react-native/split-platform-components': 2,
    //"react-native/no-inline-styles": 2,
    //"react-native/no-color-literals": 2,
    'react-native/no-single-element-style-arrays': 2
  }
};

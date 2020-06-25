module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true
  },
  rules: {
    'import/prefer-default-export': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': ['error', 'never'],
    'react/jsx-props-no-spreading': 'off'
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};

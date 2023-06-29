module.exports = {
  root: true,
  extends: '@react-native-community',
  rule: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 'off',
  },
  globals: {
    jest: true,
  },
  env: {
    browser: true,
  },
};

/** @type {import("eslint").Linter.Config} */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
};

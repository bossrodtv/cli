/** @type {import("prettier").Config} */

module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  semi: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
};

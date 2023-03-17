/** @type {import('tailwindcss').Config} */

// const pallete = color => {
//   const h = `var(--color-${color}-h)`;
//   const s = `var(--color-${color}-s)`;
//   const l = `var(--color-${color}-l)`;

//   return {
//     DEFAULT: dynamicHsl(h, s, l),
//     100: dynamicHsl(h, s, `calc(${l} + 30%)`),
//     200: dynamicHsl(h, s, `calc(${l} + 24%)`),
//     300: dynamicHsl(h, s, `calc(${l} + 18%)`),
//     400: dynamicHsl(h, s, `calc(${l} + 12%)`),
//     500: dynamicHsl(h, s, `calc(${l} + 6%)`),
//     600: dynamicHsl(h, s, l),
//     700: dynamicHsl(h, s, `calc(${l} - 6%)`),
//     800: dynamicHsl(h, s, `calc(${l} - 12%)`),
//     900: dynamicHsl(h, s, `calc(${l} - 18%)`),
//   };
// };

module.exports = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

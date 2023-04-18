const { Tokens } = require('./.mirrorful/theme_cjs.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: Tokens.colors,
      fontSize: Tokens.fontSizes,
      fontWeight: Tokens.fontWeights,
      dropShadow: Tokens.boxShadows,
    },
  },
  plugins: [],
}

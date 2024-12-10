/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        header: 'Merriweather, serif',
        main: 'Roboto Condensed, sans'
      },
      colors: {
        'dark': '#504746',
        'medium': '#6D615F',
        'light': '#F4F7F5',
        'highlight': '#F3B61F'
      },
    },
  },
  plugins: [],
}


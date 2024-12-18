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
        'highlight': '#F3B61F' //azul - 80A4ED amarelo - f3b61f
      },
      boxShadow: {
        'yellowGlow': '0 0 5px 5px rgba(243, 182, 31, 0.4)',
        'experienceBox': '0 -8px 6px -3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        menu: 'Oswald, sans',
        header: 'Merriweather, serif'
      },
      colors: {
        'oxford': '#102342',
        'berkeley': '#183463',
        'highlight': '#DA872F'
      },
    },
  },
  plugins: [],
}


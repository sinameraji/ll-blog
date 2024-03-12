/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./**/*.html', './**/*.js'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'], // Add 'Vietnam Pro' as the default sans-serif font
      },
      colors: {
        clifford: '#da373d',
        primary: '#10B981',
        secondary: '#ACAC97',
        integral: '#3C5A48',
        bg: '#FAF7EF',

      }
    }
  },
  plugins: [],
}


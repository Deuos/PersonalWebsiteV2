/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '2.5rem',
      },
      fontFamily: {
        "raleway": ['Raleway', 'sans-serif'],
      },
      width: {
        'title': "56.25rem",
        'navbarWidth': '75rem'
      },
      height: {
        'screensize': 'calc(100vh - 3px)'
      },
    },
  },
  plugins: [],
}


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
        'screensize': '99vh'
      },
      keyframes: {
        swing: {
          '15%': { transform: 'translateX(5px)' },
          '30%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(3px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
    animation: {
      swing: 'swing 1s ease 1',
      text: 'text 5s ease infinite',
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '624px'
      },
      colors: {
        'background-black': '#01060B',
        'text-whitecream': '#F3F7F0',
        'card-background': '#0B161B',
        'Light': '#F3F7F0',
        'Light-accent': '#48484B',
        'Main': '#799BA4',
        'Dark': '#181818',
        'Dark-accent': '#01060B',
        'ButtonWhite': '#F3F7F0',
        'ButtonBorder': '#799BA4',
      },
      borderRadius: {
        'customButton': '1rem',
        'projectCardRadius': '0.938rem',
        'projectCardRadiusInside': '1.25rem'
      },
      fontSize: {
        '4.5xl': '2.5rem',
        '10xl': '13.75rem',
      },
      opacity: {
        '7': '0.07'
      },
      fontFamily: {
        "raleway": ['Raleway', 'sans-serif'],
      },
      width: {
        'title': "56.25rem",
        'titleTablet': '37.5rem',
        'titleMobile': '21.875rem',
        'navbarWidth': '75rem',
        'navbarWidthTablet': '43.75rem',
        'contactButton': '40.625rem',
        'contactButtonWidth': '10.938rem',
        '85': '5.313rem',
        '95': '5.938rem',
        '110': '6.875rem',
        'projectCardWidth': '24rem',
        'projectCardWidthInside': '22.438rem',
      },
      height: {
        'screensize': '99vh',
        'screensize2': '94vh',
        'contactButtonHeight': '3rem',
        'backgroundTitle': '14.5rem',
        '70': '4.375rem',
        '60': '3.75rem',
        '40': '2.5rem',
        'projectCardHeight': '25.563rem',
        'projectCardHeightInside': '24rem',
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
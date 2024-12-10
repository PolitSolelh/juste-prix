/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {    
      fontFamily: {
        'coolvetica': ['Coolvetica']
    },
      colors: {
        'black': '#423736',
        'purple': '#987185',
        'salmon': '#d6aa9f',
        'yellowish': '#e9d5b7',
        'white': '#f4e2d1',
      },
      width: {
        '128' : '32rem',
      }
  },
  },
  plugins: [],
}


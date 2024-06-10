/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        celeste: {
          DEFAULT: '#a5f3fc',
          100: '#f0f9ff',
          200: '#e0f2fe'
        },
      },
    },
  },
  plugins: [],
}


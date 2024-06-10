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
      fontFamily: {
        'century': ['Century', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}


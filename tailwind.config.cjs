/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto']
    },
    extend: {
      backgroundImage: {
        'pineapple-pattern': 'url(/src/assets/pineapples-repeat.jpg)',
        'quatrefoil' : 'url(/src/assets/coral-quatrefoil-pattern.jpg)'
      }
    },
  },
  plugins: [],
}

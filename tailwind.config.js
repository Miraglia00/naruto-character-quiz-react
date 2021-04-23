module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        btnorange: {
          500: '#ff8624'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

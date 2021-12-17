module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        'primaryColor': '#111',
        'secondaryColor': '#f5f5f5',
        'tertiaryColor' :'#fff',
        'addonColor': '#5ea1f4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ 
  require('tailwindcss'),
  require('autoprefixer')],
}

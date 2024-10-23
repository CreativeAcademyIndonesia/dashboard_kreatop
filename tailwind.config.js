/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-body' : '#0C0C0C',
        'light-yellow' : '#DAFF00',
        'dark-blue' : '#312ECB',
        'primary-blue' : '#007AFF',
        'grey-1' : '#676767',
        'grey-2' : '#111111',
        'grey-3' : '#282828',
        'primary-purple' : '#732ECB', 
        'primary-red' : '#CB372E', 
        'light-red' : '#FFEAEC', 
        'secondary-green' : '#2ECB89', 
        'primary-green' : '#03A900', 
        'light-green' : '#BFFFBE', 
        'primary-pink' : '#C82ECB', 
        'primary-tosca' : '#2EA5CB', 
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // All HTML files in root folder
    "./src/**/*.{html,js}" 
    ,['*'] // All HTML & JS files in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

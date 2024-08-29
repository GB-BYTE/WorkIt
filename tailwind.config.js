/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '320px'}, // Custom breakpoint for screens up to 250px
        
      },
    },
  },
  plugins: [],
}
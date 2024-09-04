/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      screens: {
        'xs': {'max': '320px'}, // Custom breakpoint for screens up to 320px
        'xxl': {'min': '2050px'}, // Custom breakpoint for screens above 2050px
        '1024-1300': {'min': '1024px', 'max': '1300px'}, // Custom breakpoint for screens between 1024px and 1300px
        'ssm':{'max':'670px'},
      },
    },
  },
  plugins: [],
}
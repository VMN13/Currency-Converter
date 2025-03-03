/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
    screens: {
      "3xl": "1920px",
    }
    },
  },
  plugins: [],
  colors: {
    ...colors,
  },
}

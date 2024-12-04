/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#171d27",
        color2: "#262e3a",
        color3: "#748ea3",
        color4: "#b1abae",
        color5: "#212529"
      },
      fontFamily: {
        myFont: ['Montserrat', 'sans-serif'], // Add your myFont font here
      },
      screens: {
        'xs': '200px', // Add custom small screens
      },
    },
  },
  plugins: [],
}


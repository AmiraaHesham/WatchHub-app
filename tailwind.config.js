const { transform } = require('framer-motion');

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
      keyframes: {
        slideY: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // slideX: {
        //   '0%': { transform: 'translateX(-100%)' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        // slideRight: {
        //   "0%": { transform: "translateX(100%)" },
        //   "100%": { transform: "translateX(0)" },
        // },
      },
      animation: {
        slideY: 'slideY 0.5s ease-in-out',
        // slideX: 'slideX 1s ease-in-out',
        // slideRight: 'slideRight 1s ease-in-out',
      },
    },
    plugins: [],
  }
}

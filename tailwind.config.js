import Colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange-light': '#cc9e50',
      'orange-default': '#be7e2c',
      'orange-dark': '#7a5620',
      'orange-darker': '#36220a',
      'green-light': '#93b64f',
      'green-default': '#709633',
      'green-dark': '#547126',
      'green-darker': '#1d3208',
      'purple-light': '#bd98e6',
      'purple-default': '#8258ae',
      'purple-dark': '#5b3882',
      'purple-darker': '#37244c',
      'blue-soul': '#b4f9de',
      black: Colors.black,
      white: Colors.white,
      zinc: Colors.zinc,
    },
  },
  plugins: [],
}


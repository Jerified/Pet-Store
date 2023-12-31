/** @type {import('tailwindcss').Config} */
// import {hero-bg} from '/images/hero-bg.png'
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      "colors": {
        "antiquewhite": "#ebe3cc",
        "darkslategray": "#062d3e",
        "orangered": "#ed5c01",
        "gold": "#fbbd08",
        "linen": "#fcefe2",
        "darkcyan": "#189cab",
        },
        screens: {
          'xl': '1125px'
        },
        backgroundImage : {
            hero: "url('/images/hero-bg.png')"
        }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas:["Bebas Neue", "sans-serif"],
        town:["Comforter Brush", "sans-serif"],
        modak:["Modak", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        incosolata: ["Inconsolata", "sans-serif"],
        outfit:["Outfit", "sans-serif"],
        electro:["Electrolize", "sans-serif"],
        barcode: ["'Libre Barcode 39 Text'", "system-ui"],
        micro: ["'Micro 5 Charted'", "sans-serif"],
        iceland:["'Iceland'", "sans-serif"],
        zen:["'Zen Dots'", "sans-serif"],
        audio:["'Audiowide'", "sans-serif"],
      },
      screens:{
       
        xs: '350px',
        sm:'500px',

      },

      colors:{
        primary:{
          // pinks

          DEFAULT: "#FFA2CB",
          light: "#FFCEE3",
          light2:"#FE97AA",
          semi:"#F8697F",
          dark:"#F8329C",


        },
        secondary:{
          // green
          DEFAULT: "#04F385",
          light: "#B8EEBF",
          light2:"#9CEAAB",
          semi:"#52DE7D",
          dark:"#0CCD46",
          


        },
       
        background:{
          DEFAULT: "#121111",
          light:"#F9F8F2",
          second:"#011B1C",

        },
        text:{
          DEFAULT:"#F5F5F5",   // normal paragraph
          muted:"#B0B0B0",     // secondary text
          subtle:"#7A7A7A",    // tiny labels
          inverted:"#121111",  // text on bright backgrounds
        
          
        },
      },
      keyframes:{
        marquee:{
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
       animation: {
        marquee: "marquee 15s linear infinite",
      },

        
      
    },
  },
  plugins: [],
}
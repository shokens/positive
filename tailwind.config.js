/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: 
    {backgroundImage: {
      'working-img' : "url('/group.png')",
      'back' : "url('/gr.png')",
      'run' : "url('/round.png')"
    },
      
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Syne", "sans-serif"]
      },
      colors: {
        'color1' : "#B9FF66",
        'color2':"191A23",
        'color3':"#F3F3F3",
        "color4": "000000"
        
      }
    },
  },
  plugins: [],
}


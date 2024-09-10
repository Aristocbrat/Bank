/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarBg: "#1A3636",
        textc: "white",
      },
      boxShadow: {
        'box': '15px 15px 30px #bebebe, -15px -15px 30px #ffffff',
      },
      screens:{
        "sm" : "350px",
        "md" :"568px",
        "lg" : "1024px",
        "xl" : "1080px",
        "2xl" :"1536px",
      },
      backgroundImage:{
        "busbg":"url('/busbg.jpg')"
      }
      
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-p': {
          'clip-path': 'polygon(0 0, 75% 0, 66% 100%, 0% 100%)',
        },
      });
    },
  ],
};

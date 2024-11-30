/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
         navbg:'#474747',
         navbgA:'#FAFAFA',
         mClr:'#2C2F24',
         hbrbg:'#DBDFD0',
         btntxt:'#182226',
         taplate:'#4D592B',
         pClr:'#414536',
         btntextClr:'#AD343E',
         cntntBgClr:'#F9F9F7',
         reviewp:'#AD343E',
         reviewpA:'#737865',
         footerP:'#ADB29E',
      },
      backgroundImage:{
        banBG:"url('assets/Banner.png')",
      },
    },
  },
  plugins: [],
}


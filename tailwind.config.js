/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'workingimg' : "url('src/assets/work-proceess.webp')"
      },
      fontFamily : {
        'primary' : ['poppins', 'sans-serif'],
        'secondary' : ['syne', 'sans-serif'],
      },

      colors : {
        'heroBg' : "#0e1122",
        'para' : 'rgb(0 0 0 / 80%)',
        'primary' : '#06a055'
      }
    },
  },
  plugins: [],
}
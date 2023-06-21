/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#FF55BB",
        secondary: "#47B5FF",
        tertiary: "#DFF6FF",
      }
    },
  },
  plugins: [],
}


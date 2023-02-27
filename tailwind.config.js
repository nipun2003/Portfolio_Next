/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        colorPrimary : "#00F15E",
        colorBackground : "#121212",
        colorOnBackground : "#ecf0f3",
        colorGrayOnBackground : "#d1d5db",
        colorShadow : "#2b2b2b"
      }
    },
  },
  plugins: [],
}
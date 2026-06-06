/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "genggong-red": "#8b0000",
        "genggong-gold": "#d4af37",
      },
    },
  },
  plugins: [],
};

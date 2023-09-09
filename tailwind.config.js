/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "food1": "url('./assets/food1.jpg')",
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
  },
  plugins: [],
};

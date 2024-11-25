/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#b2d4f7",
          DEFAULT: "#006db3",
          dark: "#005a8b",
        },
        secondary: {
          light: "#f9f9f9",
          DEFAULT: "#525252",
          dark: "#121212",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1300px",
      lg: "1800px",
      xl: "2200px",
      "2xl": "2600px",
    },
    extend: {
      fontFamily: {
        sans: "Roboto Mono, monospace",
      },
    },
  },
  plugins: [],
};

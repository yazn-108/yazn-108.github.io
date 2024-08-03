/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/script.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        bodyColor: "var(--body-color)",
        textColor: "var(--text-color)",
      },
      fontFamily: {
        Alkatra: ["Alkatra", "Trebuchet MS"],
      },
    },
  },
  plugins: [],
};

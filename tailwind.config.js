const defaultTheme = require("tailwindcss/defaultTheme");

// prettier-ignore
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      an_theme: {
        light: "#00adb5",
        DEFAULT: "#393e46",
        dark: "#222831",
      },
      screens: {
        "xsm": "320px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

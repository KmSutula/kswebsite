/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Exo", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        accent: ["Rubik Glitch", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        sageGreen: "#cd7e30",
        darkBlack: "#10131D",
        greyPurple: "#7D7C8F",
        darkGrey: "#222830",
        whitish: "#F1F1F1",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".1em",
        wider: ".25em",
        widest: ".5em",
        widest: ".75em",
      },
      fontSize: {
        sm: "0.75rem",
        base: "1rem",
        m: "1.5rem",
        l: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "5rem",
        "4xl": "6rem",
        "5xl": "7rem",
      },
      plugins: [],
    },
  },
};

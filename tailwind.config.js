import defaultTheme from "tailwindcss/defaultTheme"
import aspectRatio from "@tailwindcss/aspect-ratio"
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"

export default {
  content: ["./app/views/**/*.{html,erb}", "./app/frontend/**/*.{css,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      //colors: {
      //  background: '#121212',
      //  primary: '#1f1f1f',
      //  text: '#ffffff'
      //},
      maxWidth: {
        "8xl": "90rem",
        "9xl": "105rem",
        "10xl": "120rem",
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      keyframes: {
        "spin-slow": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
}

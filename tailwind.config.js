/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,md}",
    "./content/**/*.{js,vue,ts,md}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./**/*.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Barlow",
        display: "NB Television Pro",
        sans: "Neue Montreal, sans-serif",
      },
      colors: {
        primary: "#ff9999",
        body: "#ccc",
        peachFuzz: "#ffcc99",
        lemonChiffon: "#ffff99",
        mintSpray: "#ccff99",
        jadeMist: "#99ff99",
        aquaFresh: "#99ffcc",
        skyKiss: "#99ccff",
        lavenderHush: "#9999ff",
        purpleHaze: "#cc99ff",
        pinkBliss: "#ff99cc",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #1a1a1a, #000)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

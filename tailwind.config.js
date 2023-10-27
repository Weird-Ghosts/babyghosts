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
      animation: {
        "float-1":
          "ghostie1 3s  cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate",
        "float-2":
          "ghostie2 2.5s  cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate",
        "float-3":
          "ghostie3 2s  cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate",
      },

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

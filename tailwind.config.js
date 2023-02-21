/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3282AD",
        secondaryColor: "#D2F4FF",
        gradient:"#EBFAFE",
        primaryText: "#262524",
      },
    },
  },
  plugins: [require("daisyui")],
}
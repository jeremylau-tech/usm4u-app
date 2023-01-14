/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  //add daisyUI plugin
  plugins: [require("daisyui")],
  //set default light theme
  daisyui: {
    themes: false,
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  //add daisyUI plugin
  plugins: [

    require('daisyui')
    // ... other plugins
  ]
  //set default light theme
  
}

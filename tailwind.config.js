/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  //add daisyUI plugin
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
    require('daisyui')
    // ... other plugins
  ]
  //set default light theme
  
}

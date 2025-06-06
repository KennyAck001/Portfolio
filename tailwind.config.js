/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js"],
  theme: {
    extend: {
      colors: {
        customGreen: "#20C997",
        lightGrey: "#343A40",
        darkGrey: "#212529",
        blueGrey: "#252B33",
        backGround: "#00000080",
      },
      screens: {
        'xs': '480px',  // Custom breakpoint for small screens
        'lg': '1200px',
        'cn':'1000px'// Custom breakpoint for large screens
      },
    },
  },
  plugins: [],
}

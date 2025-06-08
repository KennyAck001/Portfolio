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
        sm: "580px",
        md: "1000px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "xs": "360px", // Custom screen size (optional)
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        yourFont: ['YourFont', 'sans-serif'] // for local font
      },
    },
  },
  plugins: [],
}

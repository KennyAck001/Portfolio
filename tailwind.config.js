/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors:{
      customGreen: "#20C997",
      lightGrey: "#343A40",
      darkGrey: "#212529",
      blueGrey:"#252B33",
      backGround:"#00000080",
    },

    screens:{
        'xs': '475px',      // Extra small devices
        'sm': '640px',      // Small devices (default)
        'md': '768px',      // Medium devices (default)
        'lg': '1110px',     //Large devices
    }
    },
  },
  plugins: [],
}


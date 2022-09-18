/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors:{
      'light-blue': '#8AB6F8',
      'dark-blue': '#0E437A',
      'grey': '#FFFFFF',
      'orange': '#cd7a00',
      'black': '#432800'
    },
    fontFamily: {
      lora: [ "lora", "sans-serif" ],
    },
    extend: {},
  },
  plugins: [],
}

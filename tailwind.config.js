/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/components/*.js"],
  theme: {
    extend: {},
    letterSpacing: {
      widest: "0.5em"
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}


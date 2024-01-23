const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        // Some useful comment
        extend: {
          colors: {
            'regal-blue': '#047CFF',
          },
          // fontFamily: {
          //   'sans': ["Lexend", ...defaultTheme.fontFamily.sans],
          // },
        }
      },
    content: [
      "./screens/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  };
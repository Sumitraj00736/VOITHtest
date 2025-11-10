/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#5033a4',
        customGreen: '#008000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 4s steps(40) 1s forwards',
      },
      keyframes: {
        typing: {
          'from': {
            width: '0',
          },
          'to': {
            width: '100%',
          },
        },
      },
    },
  },
  plugins: [],
}
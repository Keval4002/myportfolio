/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', 'serif'],
        rubik: ['Rubik', 'serif'],
      },
    },
  },
  plugins: [],
}

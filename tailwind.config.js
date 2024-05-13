/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Jost', 'sans-serif'],
        title: ['DM Serif Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


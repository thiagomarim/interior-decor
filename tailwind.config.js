/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        secondary: "#545454",
        terceary: "#fdba74"

      },
      fontFamily: {
        body: ['Jost', 'sans-serif'],
        title: ['DM Serif Display', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('./assets/hero/bg.jpg')",
      },
    },
  },
  plugins: [],
}


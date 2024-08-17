/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navLightBlue: 'rgba(22, 83, 142, 0.10)',
        themeBlue: '#16538E',
        buttonGray: '#989898',
        errorRed: '#FB7474',
      },
    },
  },
  plugins: [],
}

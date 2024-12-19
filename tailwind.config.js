/** @type {import('tailwindcss').Config} */
export default {
// tailwind.config.js
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'black-han-sans': ['"Black Han Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'russo-one': ['"Russo One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

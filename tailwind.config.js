/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      '2sm': '768px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}


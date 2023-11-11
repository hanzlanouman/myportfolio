/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#121212',
        textLight: '#f5f5f5',
        purple: '#7d2ae8',
        purpleLighter: '#9f6ee8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        logo: ['Open Sans', 'sans-serif'],
      },
      screens: {
        md: '840px',
      },
    },
  },
  plugins: [],
};

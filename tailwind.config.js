/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#090909',
        textLight: '#f5f5f5',
        purple: '#7d2ae8',
        purpleLight: '#a454ff',
        purpleLighter: '#9f6ee8',
        instagramStart: '#fdf497',
        instagramEnd: '#d6249f',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        logo: ['Open Sans', 'sans-serif'],
        logoArfah: ['ScriptMTBold', 'cursive'],
        mono: ['Roboto Mono', 'monospace'],
        arizonia: ['Arizonia', 'cursive'],
      },

      screens: {
        md: '840px',
      },
      transitionDuration: {
        1500: '900ms',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#C00010',
        purple: '#615D6C',
        lime: '#D2ED96',
        cream: '#C9D9FC',
        charcoal: '#1C1C1E',
        sand: '#EEF3FF',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

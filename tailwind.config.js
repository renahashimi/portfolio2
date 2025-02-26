/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        prata: ['"Prata"', 'serif'],
        lora: ['"Lora"', 'serif'],
        play: ['"Playfair Display SC"', 'serif'],
        allison: ['"Allison"', 'serif']
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors: {
        'custom-light': '#BBAFAF',
        'custom-medium': '#998787',
        'custom-dark': '#6E5D5D',
      },
      spacing: {
        100: '100px',
        200: '200px',
      },
    },
  },
  plugins: [],
};

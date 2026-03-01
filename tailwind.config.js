/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#E8841A',
        'deep-saffron': '#C4671A',
        gold: '#C9A227',
        'dark-brown': '#3B1A08',
        cream: '#FDF6E3',
        'warm-white': '#FFFBF2',
        rust: '#A0391A',
        'forest-green': '#4A7C59',
        'light-gold': '#F5DFA0',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

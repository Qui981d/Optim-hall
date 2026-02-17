/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'system-ui', 'sans-serif'],
      },
      colors: {
        'optimhall': {
          'blue': '#1E3960',      // Bleu nuit - couleur principale
          'dark': '#0B1320',      // Gris foncé
          'gray': '#8E94A0',      // Gris moyen
          'white': '#FFFFFF',     // Blanc
        }
      }
    },
  },
  plugins: [],
};

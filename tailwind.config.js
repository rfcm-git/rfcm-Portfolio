/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-scale': 'fadeInScale 2.5s ease-out forwards',
      },
      keyframes: {
        fadeInScale: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '30%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
          '70%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px) scale(1.02)',
          },
        },
      },
    },
  },
  plugins: [],
};
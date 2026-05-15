/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 40px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 80px rgba(139, 92, 246, 0.5)',
      },
      colors: {
        brand: {
          violet: '#7c3aed',
          indigo: '#4f46e5',
          dark: '#050510',
        }
      },
      animation: {
        'blob': 'blob 8s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        '4xl': '80px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e7d7bd',
          300: '#d6ba94',
          400: '#c5946b',
          500: '#b87951',
          600: '#a66545',
          700: '#8a4f3a',
          800: '#704135',
          900: '#5b362d',
        },
        forest: {
          50: '#f0f7f0',
          100: '#dcebdc',
          200: '#bad8ba',
          300: '#91bd91',
          400: '#6ba56b',
          500: '#4a7c59',
          600: '#386148',
          700: '#2e4e3b',
          800: '#264032',
          900: '#20352a',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ede4',
          200: '#d5dcca',
          300: '#b8c4a6',
          400: '#96a67f',
          500: '#7a8962',
          600: '#5f6c4c',
          700: '#4c553d',
          800: '#3e4633',
          900: '#343b2c',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
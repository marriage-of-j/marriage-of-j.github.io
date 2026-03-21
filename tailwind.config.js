/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'text-primary': '#FFF5EE',
            'text-secondary': '#000000',
            'blue': '#6DB2F2',
            'plum': '#471616',
            'yellow': '#E5B25D',
            'orange': '#D35D04',
            'pink': '#DA9BD7',
            'green': '#B1CA76',
        },
    },
    fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif'],
        cursive: ['Monsieur La Doulaise', 'cursive'],
    },
    keyframes: {
      fall: {
        '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
        '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0.3' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(-5deg)' },
        '75%': { transform: 'rotate(5deg)' },
      },
      'bounce-in': {
        '0%': { opacity: '0', transform: 'scale(0.8)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      }
    },
    animation: {
      fall: 'fall linear infinite',
      wiggle: 'wiggle 0.5s ease-in-out 3',
      'bounce-in': 'bounce-in 0.3s ease-out forwards',
    }
  },
  plugins: [],
}


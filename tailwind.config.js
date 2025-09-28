/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // --- CUSTOM COLORS ---
      colors: {
        'primary-deep-blue': '#004AAD',
        'primary-teal': '#007B80',
        'accent-green': '#33D6A3',
        'accent-aqua': '#2AF598',
        'neutral-light-gray': '#F8F8F8',
        'neutral-off-white': '#EFEFEF',
        'text-dark-gray': '#333333',
        'text-black': '#0A0A0A',
      },
      // --- CUSTOM FONTS ---
      fontFamily: {
        body: ["'Open Sans'", "sans-serif"],
        headings: ["Poppins", "sans-serif"],
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui"],
      },
      // --- KEYFRAMES ---
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        pulseShadow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(255,255,255,0.7)' },
          '50%': { textShadow: '0 0 15px rgba(255,255,255,1)' },
        },
      },
      // --- ANIMATIONS ---
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slide-in-down': 'slideInDown 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'blob': 'blob 7s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'pulse-shadow': 'pulseShadow 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

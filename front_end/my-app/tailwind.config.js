/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      keyframes: {
        fade1: {
          '0%': { opacity: 0, transform: 'translateY(2000px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        fade2: {
          '0%': { opacity: 0, transform: 'translateY(2000px)' },
          '100%': { opacity: 1, transform: 'translateY(100px)' },
        },

        fadeUpFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },

      },
      animation: {
        fade1: 'fade1 4s ease-out forwards',
        fade2: 'fade2 1.5s ease-out forwards',

        float: 'fadeUpFloat 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

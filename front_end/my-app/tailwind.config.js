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
        fade: {
          '0%': { opacity: 0, transform: 'translateY(2000px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      
        fadeUpFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

      },
      animation: {
        fade: 'fade 4s ease-out forwards',
        fade2: 'fade 4s ease-out forwards',
       float: 'fadeUpFloat 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

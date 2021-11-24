const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#081F32',
        black_alpha_70: '#081F32B3',
        black_alpha_50: '#081F3280',
        orange: '#FF8A00',
        orange_alpha_15: '#FF8A0026',
        orangeLight: '#FFAA45',
        background: '#E5E5E5',
      },
      boxShadow: {
        dropDownMenu: '0px 48px 84px -8px rgba(118, 127, 173, 0.1)',
        eventIcons: '0px 18px 40px -8px rgba(118, 127, 173, 0.3);',
      },
      backgroundImage: {
        'footer-city': "url('/assets/footer_city.svg')",
        background: "url('/assets/background.svg')",
      },
      textColor: {
        primary: '#081F32',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

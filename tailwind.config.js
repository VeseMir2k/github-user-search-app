/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      space_mono: ['Space Mono'],
    },
    fontSize: {
      xs: '11px',
      sm: '13px',
      base: '15px',
      xl: '16px',
      '2xl': '22px',
      '3xl': '26px',
    },
    lineHeight: {
      1: '38px',
      2: '33px',
      3: '25px',
      4: '24px',
      5: '20px',
    },
    colors: {
      background_primary: '#F6F8FF',
      background_secondary: '#FEFEFE',
      text_primary: '#222731',
      text_secondary: '#4B6A9B',
      background_primary_dark: '#141D2F',
      background_secondary_dark: '#1E2A47',
      white: '#FFFFFF',
      blue: '#0079FF',
      red: '#F74646',
      grey: '',
    },
    boxShadow: {
      input_shadow: '0 16px 30px -10px rgba(70, 96, 187, 0.20)',
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      space_mono: ['Space Mono'],
    },
    lineHeight: {
      line_height_1: '38px',
      line_height_2: '33px',
      line_height_3: '25px',
      line_height_4: '24px',
      line_height_5: '20px',
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
    extend: {},
  },
  plugins: [],
};

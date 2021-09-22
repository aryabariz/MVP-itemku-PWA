module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyanBlue: '#307FE2',
        nero: '#222222',
        zambesi: '#595959',
        whisper: '#E9E9E9',
        purple: '#5452F6',
        blueOcean: '#E2F2FF',
        black: '#24201D',
        gray: '#ADADAD',
        purpleSoft: '#ACA9F1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

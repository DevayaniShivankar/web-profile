module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'purple-1': '#E1CCEC',
      'purple-2': '#C9B6E4',
      'purple-3': '#BE9FE1',
      'purple-4': '#BC6FF1',
      'purple-5': '#52057B',
      'grey-purple': '#F1F1F6',
      'white' : '#F9FAFB',
      'grey' : '#D1D5DB',
      'dark-grey' : '#505050'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

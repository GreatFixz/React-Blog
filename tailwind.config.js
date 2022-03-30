module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'max': '375px'},
      's': {'max': '412px'},
      'm': {'max': '600px'},
    },
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
        './*/*.html',
        './**/*.html',
        './src/css/*.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./images/desktop/image-header.jpg')",
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
      colors: {
        'customred': 'hsl(7, 99%, 70%)',
        'customyellow': 'hsl(51, 100%, 49%)',
        'customdarkblue': 'hsl(212, 27%, 19%)',
        'customverydarkgrayish': 'hsl(213, 9%, 39%)',
        'customdarkgrayish': 'hsl(232, 10%, 55%)',
      },
    },
  },
  plugins: [],
}

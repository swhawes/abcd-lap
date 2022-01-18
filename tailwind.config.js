module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@kamona/tailwindcss-perspective'),
  ],
}


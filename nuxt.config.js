module.exports = {
  head: {
    titleTemplate: 'Dana Pensiun Pertamina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ],
    script: [
      { src: 'js/uikit.min.js' },
      { src: 'js/uikit-icons.min.js' }
    ]
  },
  css: [
    '~/assets/scss/uikit.scss'
  ],
  build: {
    publicPath: 'https://ronaldhariyanto.github.io/dpp/dist/'
  }
}
module.exports = {
  head: {
    titleTemplate: 'Dana Pensiun Pertamina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300;400,700,800,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,800' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
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
module.exports = {
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'vieport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'css/uikit.min.css' },
      { rel: 'favicon', href: 'favicon.ico' }
    ],
    script: [
      { src: 'js/uikit.min.js' },
      { src: 'js/uikit-icons.min.js' }
    ]
  }
}
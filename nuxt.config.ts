import NuxtConfiguration from '@nuxt/config'

// for Github Pages
const ghPagesBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/timetable-editor/'
  },
  generate: {
    dir: 'docs'
  },
} : {}

const config: NuxtConfiguration = {
  ...ghPagesBase,
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/layout.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Build configuration
  */
  build: {
  }
}

export default config

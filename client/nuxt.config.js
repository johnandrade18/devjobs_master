export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'keywords',
        content: 'bootstrap, admin template, Vuejs, Nodejs, Nuxtjs',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        name: 'theme-color',
        content: '',
      },
      {
        name: 'author',
        content: 'John Andrade',
      },
      {
        name: 'theme-color',
        content: '#ffff',
      },
      {
        name: 'MobileOptimized',
        content: 'width',
      },
      {
        name: 'HandheldFriendly',
        content: 'true',
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-barstyle',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Birthstone&family=Courgette&display=swap',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/glightbox@3.1.0/dist/js/glightbox.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@srexi/purecounterjs@1.2.1/dist/purecounter_vanilla.js',
      },
      {
        src: 'https://unpkg.com/swiper@7/swiper-bundle.min.js',
      },
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
      },
      {
        src: 'https://kit.fontawesome.com/dc2bb2f62c.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/vendor/aos/aos.css',
    '@/assets/vendor/bootstrap/css/bootstrap.min.css',
    '@/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '@/assets/vendor/boxicons/css/boxicons.min.css',
    '@/assets/vendor/glightbox/css/glightbox.min.css',
    '@/assets/vendor/remixicon/remixicon.css',
    '@/assets/vendor/swiper/swiper-bundle.min.css',
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/main.js', ssr: true },
    { src: '@/plugins/swiper.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/auth-next',

    'vue-sweetalert2/nuxt',
  ],

  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:5000/',
  },

  auth: {
    strategies: {
      local: {
        url: 'http://localhost:5000',
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
          name: 'Authorization',
        },
        endpoints: {
          login: { url: '/api/auth/signin', method: 'post' },
          logout: false,
          user: false,
        },
        redirect: {
          login: '/signin',
          logout: '/',
          callback: '/signin',
          home: '/jobslist',
        },
      },
    },
  },
  proxy: {
    //  '/api/': 'http://localhost:5000/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
}

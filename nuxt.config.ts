import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed
const config: NuxtConfig = {
  //ssr: true,
  target: 'static',
  mode: 'universal',
  loading: {
    color: '#b0eba4',
    failedColor: '#186558',
    height: '5px'
  },
  generate: {
    fallback: true
  },
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#186558',
    background: '#f7fafc'
  },
  pageTransition: {
    name: 'list',
    mode: 'out-in',
    appear: true,
    beforeEnter () {
      console.log('Before enter page...');
    },
    beforeLeave () {
      console.log('Before leave page...');
    },   
  },
  layoutTransition: {
    name: 'list',
    mode: 'out-in',
    beforeEnter () {
      console.log('Before enter layout...');
    },
    beforeLeave () {
      console.log('Before leave layout...');
    },   
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Knewave&family=Roboto:wght@100;300;400;500;700;900&display=swap' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    "@nuxtjs/color-mode",
    '@nuxtjs/firebase',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
  ],
  modules: ['@nuxtjs/axios','@nuxtjs/toast', '@nuxtjs/sitemap', '@nuxtjs/google-analytics'],
  plugins: ["~/plugins/commerce.js", '~/plugins/validate.js', "~/plugins/filter.js", "~/plugins/tooltip.js"],
  router: { middleware: ['testMiddleware'], },
  moment: {
    /* module options */
    defaultLocale: 'fr',
    locales: ['fr']
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  sitemap: {
    // options
    hostname: 'https://greenfuz.fr',
    gzip: true,
    exclude: ['/error'],
    routes: [
      '/',
      '/conditions-generales-de-vente',
      '/mentions-legales',
      '/paiement',
      '/politique-de-confidentialite',
      '/commande',
      '/auth/profil',
      '/auth',
      '/categories',
      '/categories/indoor',
      '/categories/resine',
      '/categories/outdoor',
    ],
  },
  toast: {
    position: 'bottom-center',
    register: [ // Register custom toasts
      {
        name: 'gfinfo',
        message: (message: any) => message,
        options: {
          type: 'default',
          duration: 2000,
          containerClass: 'max-w-[375px] w-full px-10',
          singleton: false,
          className: 'w-full bg-white text-indoor shadow-indoor rounded-xl py-5 pl-5 pr-10 font-simple justify-center',
          theme: 'none',
          action : {
            text : 'X',
            class: 'animate-pulse text-gray-400 decoration-none absolute right-[1.25rem]',
            onClick : (e: any, toastObject: { goAway: (arg0: number) => void; }) => {
              toastObject.goAway(0);
            }
          },
        },
      },
      {
        name: 'gferror',
        message: (message: any) => message,
        options: {
          type: 'default',
          duration: 3000,
          containerClass: 'max-w-[375px] w-full px-10',
          singleton: false,
          className: 'w-full bg-indoor text-light shadow-indoor rounded-xl py-5 pl-5 pr-10 font-simple justify-center',  
          theme: 'none',
          action : {
            text : 'X',
            class: 'animate-pulse text-outdoor decoration-none absolute right-[1.25rem]',
            onClick : (e: any, toastObject: { goAway: (arg0: number) => void; }) => {
                toastObject.goAway(0);
            }
          },
        },
      },
      {
        name: 'gfsucces',
        message: (message: any) => message,
        options: {
          type: 'default',
          duration: 2000,
          containerClass: 'max-w-[375px] w-full px-10',
          singleton: false,
          className: 'w-full bg-outdoor text-indoor shadow-indoor rounded-xl py-5 pl-5 pr-10 font-simple justify-center', 
          theme: 'none',
          action : {
            text : 'X',
            class: 'animate-pulse text-white decoration-none absolute right-[1.25rem]',
            onClick : (e: any, toastObject: { goAway: (arg0: number) => void; }) => {
                toastObject.goAway(0);
            }
          },
        },
      },
    ]
  },
  firebase: {
    lazy: false,
    config: {
      apiKey: 'AIzaSyCdqblQrtkdPyPojGHit140gfzqCwciibk',
      authDomain: 'green-fuzz.firebaseapp.com',
      projectId: 'green-fuzz',
      storageBucket: 'green-fuzz.appspot.com',
      messagingSenderId: '978523991386',
      appId: '1:978523991386:web:f87eda3261d6d63096d763',
      measurementId: 'G-T91D6XSG6N',
      databaseURL: 'https://green-fuzz-default-rtdb.europe-west1.firebasedatabase.app',
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        emulatorPort: isDev && useEmulators ? 9099 : undefined,
        disableEmulatorWarnings: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
      functions: {
        emulatorPort: isDev && useEmulators ? 12345 : undefined,
      },
      storage: {
        emulatorPort: isDev && useEmulators ? 9199 : undefined,
        emulatorHost: 'localhost',
      },
      database: {
        emulatorPort: isDev && useEmulators ? 9000 : undefined,
      },
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Bienvenue sur Greenfuz',
        },
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'Test',
            url: 'Test',
          },
        ],
        fcmPublicVapidKey: 'BBgeG8wzbEhHLXI58PE7OXa9q4NohnapcfF3BDfx2rwN8dIhxYd-DY5XbBDrSEHJxq6qMYYksadbJaaDtE3eyL4',
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: true,
  },
  pwa: {
    // disable the modules you don't need
    meta: {
      charset : 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      favicon: true,
      mobileApp: true,
      author: 'GreenFuz',
      theme_color: 'white',
      lang: 'fr',
    },
    // if you omit a module key form configuration sensible defaults will be applied
    manifest: {
      name: 'GreenFuz.fr - Votre nouveau fournisseur de CBD', // Nom complet
      short_name: 'GreenFuz', // Petit nom
      description: '', // Description téléphone / app
      lang: 'fr',
      background_color: '#FFFFFF',
      display: 'standalone',
      icons: [
        {src: '/favicon.png', sizes: '512x512', type: 'image/png'},
        {src: '/favicon.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable'}
      ]
    },
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: `https://maps.googleapis.com/maps/api/js?libraries=places&v=3&`+process.env.NUXT_ENV_GOOGLE_PLACES_KEY,
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    }
  },
  build: {
    extend(config, ctx) {
      config.module!.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    transpile: ["vee-validate/dist/rules"],
  },
}
export default config


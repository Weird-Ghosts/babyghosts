export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/donate", "/sponsor", "/grant-and-accelerator", "/sitemap.xml"],
    },
  },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      "postcss-mixins": {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  modules: [
    "@nuxthq/studio",
    "@nuxt/content",
    "nuxt-jsonld",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxt/devtools",
    "dayjs-nuxt",
    "@nuxt/image",
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
  ],
  image: {
    imgix: {
      baseURL: "https://baby-ghosts.imgix.net",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Barlow: {
        wght: "100;0,400;0,500;0,700;0,900",
        ital: "100;1,400;1,500;1,700;1,900",
      },
    },
  },

  plausible: {
    domain: "babyghosts.fund",
    autoOutboundTracking: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  dayjs: {
    locales: ["en"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "America/New_York",
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,

      remarkPlugins: ["remark-smartypants"],
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },
  router: {
    options: {
      strict: true,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      bodyAttrs: { class: "antialiased font-body" },
    },
  },
});

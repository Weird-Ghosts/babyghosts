export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/donate", "/sponsor"],
    },
  },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxt/devtools",
    "dayjs-nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  image: {
    imgix: {
      baseURL: "https://assets.imgix.net",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      "DM+Sans": {
        wght: "200;500;1000",
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

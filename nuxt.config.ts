// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    "@nuxthq/ui",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/prismic",
    "@nuxtjs/i18n",
  ],
  devtools: {
    enabled: false,
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "es",
        iso: "es-ES",
      },
      {
        code: "fr",
        iso: "fr-FR",
      },
    ],
    defaultLocale: "en",

    // if you are using custom path, default
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  // Defaults options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },

  ui: { icons: ["mdi", "logos", "material-symbols"] },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/ddc0cce3m/image/upload/",
    },
  },

  components: [
    { path: "~/components/MeetThem", prefix: "MeetThem" },
    "~/components",
  ],

  prismic: {
    endpoint: "animalgod",
    clientConfig: {
      routes: [
        {
          type: "pet",
          path: "/pet/:uid",
        },
      ],
    },
  },
});

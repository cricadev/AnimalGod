// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "nuxt-icon",
  ],
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
      baseURL: "https://res.cloudinary.com/ddc0cce3m/image/upload/v1688160841/animalGod/",
    },
  },
  components: [
    { path: "~/components/MeetThem", prefix: "MeetThem" },
    "~/components",
  ],
  supabase: {

    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ["/"],
    }
  }
});

import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // Enable SSG
  ssr: false,
  modules: [
    "reka-ui/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [tailwindcss()],
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
    },
  },
  // Enables the development server to be discoverable by other devices when running on iOS physical devices
  devServer: {
    host: "0",
  },
  // Avoids error [unhandledRejection] EMFILE: too many open files, watch
  ignore: ["**/src-tauri/**"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  fonts: {
    provider: "local",
    families: [
      {
        name: "PingFang SC",
        src: "PingFangSC",
        provider: "local",
        weight: [400, 500],
      },
      // https://github.com/ibm/plex
      {
        name: "IBM Plex Sans Hebrew",
        src: "IBM Plex Sans Hebrew",
        provider: "local",
        weight: [300, 700],
      },
    ],
  },

  icon: {
    // provider: "none",
    customCollections: [
      {
        prefix: "zsim",
        dir: "./app/assets/svgs",
      },
    ],
    clientBundle: {
      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 2048,
    },
  },

  i18n: {
    defaultLocale: "zh_cn",
    restructureDir: "app",
    langDir: "./locales",
    locales: [
      { code: "zh_cn", name: "简体中文", file: "zh_cn.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },
})

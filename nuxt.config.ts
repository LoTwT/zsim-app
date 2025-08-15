import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // Enable SSG
  ssr: false,
  modules: ["reka-ui/nuxt", "@nuxt/fonts"],
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

  fonts: {
    provider: "local",
    families: [
      {
        name: "PingFang SC",
        src: "/fonts/PingFangSC-Regular.woff2",
        provider: "local",
        weight: "400",
      },
      {
        name: "IBM Plex Sans Hebrew",
        src: "/fonts/IBMPlexSansHebrew-Bold.woff2",
        provider: "local",
        weight: "700",
      },
    ],
  },
})

export default defineAppConfig({
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  theme: {
    radius: 0.25,
    blackAsPrimary: false,
  },
  ui: {
    colors: {
      primary: "orange",
      neutral: "zinc",
    },
    icons: {
      // @ts-expect-error no type
      light: "i-lucide:sun",
      dark: "i-lucide:moon",
      system: "i-lucide:monitor",
    },
  },
})

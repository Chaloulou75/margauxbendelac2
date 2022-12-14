// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Margaux Bendelac | Avocate à la Cour",
      meta: [
        {
          name: "description",
          content:
            "Avocate au Barreau de Paris, Droit pénal général, Droit pénal des affaires, Droit international des affaires.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@kevinmarrec/nuxt-pwa",
  ],
  googleFonts: {
    download: true,
    preconnect: true,
    families: {
      "Cormorant+Garamond": true,
      "EB+Garamond": true,
    },
    display: "swap",
  },
});

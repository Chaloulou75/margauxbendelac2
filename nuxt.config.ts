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
                        "Avocate au Barreau de Paris, Droit pénal général, Droit pénal des affaires, Droit international des affaires. Urgence pénale. Avocat pénaliste Paris",
                },
                {
                    name: "google-site-verification",
                    content: "b61mVcI3EbJ5l66EfMJ1RQ24Dv4gfrJe301LXHMew2Y",
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
        "@nuxt/image",
        "@vueuse/nuxt",
        "@nuxtjs/seo",
        "@vite-pwa/nuxt",
        "nuxt-gtag",
    ],

    plugins: ["~/plugins/preline.client.ts"],

    site: {
        url: "https://www.bendelac-avocat.com",
        name: "Margaux Bendelac | Avocate à la Cour",
        description:
            "Avocate au Barreau de Paris, Droit pénal général, Droit pénal des affaires, Droit international des affaires. Urgence pénale. Avocat pénaliste Paris",
        defaultLocale: "fr",
    },

    gtag: {
        id: "G-W7J7EGRX9Y",
    },

    googleFonts: {
        download: true,
        preconnect: true,
        families: {
            "Cormorant+Garamond": true,
            "EB+Garamond": true,
        },
        display: "swap",
    },

    compatibilityDate: "2024-09-29",
});

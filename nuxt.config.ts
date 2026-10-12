// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    routeRules: {
        "/merci": { robots: false },
    },

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
            // Les titles de chaque page sont complets : pas de suffixe automatique.
            titleTemplate: "%s",
            meta: [
                {
                    name: "description",
                    content:
                        "Avocate pénaliste à Paris, intervention en urgence : garde à vue, convocation au commissariat, tribunal correctionnel, instruction, assises. Île-de-France — 07 62 35 22 98.",
                },
                {
                    name: "google-site-verification",
                    content: "b61mVcI3EbJ5l66EfMJ1RQ24Dv4gfrJe301LXHMew2Y",
                },
            ],
            script: [
                {
                    type: "application/ld+json",
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Attorney",
                        name: "Margaux Bendelac",
                        description:
                            "Avocate pénaliste au barreau de Paris : droit pénal général, droit pénal des mineurs et droit pénal des affaires.",
                        url: "https://www.bendelac-avocat.com",
                        telephone: "+33762352298",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "99 rue de Courcelles",
                            addressLocality: "Paris",
                            postalCode: "75017",
                            addressCountry: "FR",
                        },
                        areaServed: {
                            "@type": "Country",
                            name: "France",
                        },
                        priceRange: "$$",
                        image: "https://www.bendelac-avocat.com/img/margaux.jpg",
                        sameAs: [],
                    }),
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

    vite: {
        plugins: [tailwindcss()],
    },

    css: ["~/assets/css/tailwind.css"],

    modules: [
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "@vueuse/nuxt",
        "@nuxtjs/seo",
        "@vite-pwa/nuxt",
        "nuxt-gtag",
        "shadcn-nuxt",
    ],

    shadcn: {
        prefix: "",
        componentDir: "./app/components/ui",
    },

    site: {
        url: "https://www.bendelac-avocat.com",
        name: "Margaux Bendelac | Avocate à la Cour",
        description:
            "Avocate pénaliste à Paris, intervention en urgence : garde à vue, convocation au commissariat, tribunal correctionnel, instruction, assises. Île-de-France — 07 62 35 22 98.",
        defaultLocale: "fr",
    },

    // Images de partage statiques (ogImage dans useSeoMeta) : pas de génération dynamique.
    ogImage: {
        enabled: false,
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

    compatibilityDate: "2025-07-01",
});

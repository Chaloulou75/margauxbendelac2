# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nuxt 4 (Vue 3) static site for a French criminal law firm (Margaux Bendelac, Avocate à la Cour). Deployed at https://www.bendelac-avocat.com. Content is in French.

## Commands

```bash
npm run dev        # Development server on http://localhost:3000
npm run build      # Production build
npm run generate   # Static site generation (SSG)
npm run preview    # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

- **Nuxt 4 SSG** with file-based routing (`app/pages/`), Vue 3 components (`app/components/`), and Tailwind CSS
- **Directory structure**: Application code lives in `app/` (Nuxt 4 convention). Config files remain at root.
- **Styling**: Tailwind CSS v3 with custom fonts (Cormorant Garamond, EB Garamond) via `@nuxtjs/google-fonts`. Custom theme colors and background images defined in `tailwind.config.js`
- **UI Libraries**: Preline (auto-discovered client plugin in `app/plugins/preline.client.ts`), Headless UI, Heroicons
- **Carousel**: Swiper v8 used on the home page (`app/pages/index.vue`)
- **Forms**: Contact form in `app/components/FormContact.vue` uses Netlify Forms integration with honeypot spam protection
- **SEO/Analytics**: `@nuxtjs/seo` v3 module + `nuxt-gtag` for Google Analytics. Each page has `useSeoMeta()` calls. JSON-LD Attorney schema in `nuxt.config.ts`.
- **PWA**: `@vite-pwa/nuxt` for progressive web app support
- **Images**: `@nuxt/image` module for optimization; static assets in `public/img/`, source assets in `app/assets/img/`

## Key Files

- `nuxt.config.ts` — Central config: modules, SEO metadata, JSON-LD, Google Fonts, gtag, Nitro settings, page transitions
- `app/app.vue` — Root layout wrapping all pages with AppNavigation, AppFooter, and Phone (floating emergency call button)
- `app/components/AppNavigation.vue` — Main responsive nav with sticky header, backdrop blur, and multi-level dropdown menus
- `tailwind.config.js` — Custom theme (colors, fonts, hero background images), includes Preline plugin

## Routing

Pages map directly to routes via Nuxt file-based routing:
`/` (index), `/cabinet`, `/competences`, `/contact`, `/presse`, `/honoraires`, `/stades-de-la-procedure-penale`, `/mentionslegales`, `/politiquedeconfidentialite`

## Build Notes

- `@headlessui/vue` is explicitly transpiled in `nuxt.config.ts` (`build.transpile`)
- Nitro is configured with `compressPublicAssets` and `crawlLinks` for pre-rendering
- Page transitions use a fade animation (opacity) defined in `app/app.vue` and `nuxt.config.ts`
- `robots.txt` and `sitemap.xml` are auto-generated (sitemap via `@nuxtjs/seo`)

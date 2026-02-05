/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app/app.vue",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        cormorant: ["Cormorant Garamond"],
        ebgaramond: ["EB Garamond"],
      },
      backgroundImage: {
        "hero-colonnes": "url('~/assets/img/colonnes-min.jpg')",
        "hero-palais": "url('~/assets/img/palais-min.jpg')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("preline/plugin"),
  ],
};

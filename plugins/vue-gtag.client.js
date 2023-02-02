import VueGtag from "vue-gtag";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: "G-JF1NEH7R9K",
      },
    },
    nuxtApp.$router
  );
});

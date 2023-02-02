import VueGtag, { trackRouter } from "vue-gtag-next";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-JF1NEH7R9K",
    },
  });
  trackRouter(useRouter());
});

// Remonte à Google Analytics chaque clic sur un lien téléphone (a[href^="tel:"]).
export default defineNuxtPlugin(() => {
  const { gtag } = useGtag();
  const route = useRoute();

  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
    if (!link) return;

    gtag("event", "clic_telephone", {
      page_path: route.path,
      link_text: link.textContent?.trim() || undefined,
    });
  });
});

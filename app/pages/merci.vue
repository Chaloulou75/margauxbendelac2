<script setup>
useSeoMeta({
  title: "Demande bien reçue | Margaux Bendelac",
  description: "Votre demande de rappel a bien été transmise au cabinet.",
});

// Événement de conversion, en plus de la page vue /merci.
onMounted(() => {
  useGtag().gtag("event", "generate_lead", { form_name: "contactform" });
});
</script>

<template>
  <div class="page-content mb-auto">
    <h1>Merci, votre demande est bien arrivée.</h1>
    <p>Le cabinet vous rappelle dans les meilleurs délais.</p>
    <p>
      Si votre situation est urgente — garde à vue, convocation imminente,
      déferrement — appelez directement le <PhoneLink />.
    </p>
  </div>
</template>

<script setup>
import articles from '~/data/presse.json'

useSeoMeta({
  title: "Revue de Presse — Margaux Bendelac",
  description:
    "Revue de presse de Maître Margaux Bendelac, avocate pénaliste à Paris. Interventions dans les médias : Public Sénat, Mediapart, France Info, Le Parisien, France Bleu.",
  ogTitle: "Revue de Presse — Margaux Bendelac",
  ogDescription:
    "Revue de presse de Maître Margaux Bendelac, avocate pénaliste à Paris. Interventions dans les médias.",
  ogUrl: "https://www.bendelac-avocat.com/presse",
  ogImage: "https://www.bendelac-avocat.com/img/margaux.jpg",
  twitterCard: "summary",
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-start w-full h-auto max-w-full px-2 py-8 mx-auto mb-auto md:px-8 md:items-start">
        <h1 class="mb-4 text-3xl font-thin text-center text-black md:mb-8 md:text-left">
            Revue de Presse
        </h1>

        <div class="columns-1 md:columns-2 gap-8">
            <PressCard v-for="article in articles" :key="article.url" v-bind="article">
                <div v-if="article.videoComponent" class="w-full mx-auto mb-4 aspect-video">
                    <LazyVideoPublicSenat />
                </div>
            </PressCard>
        </div>
    </div>
</template>

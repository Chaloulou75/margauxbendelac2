<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";

const modules = ref([Autoplay]);

useSeoMeta({
  title: "Margaux Bendelac — Avocate pénaliste à Paris",
  description:
    "Cabinet de Maître Margaux Bendelac, avocate pénaliste à Paris. Droit pénal général, droit pénal des affaires et droit international des affaires. Urgence pénale.",
  ogTitle: "Margaux Bendelac — Avocate pénaliste à Paris",
  ogDescription:
    "Cabinet de Maître Margaux Bendelac, avocate pénaliste à Paris. Droit pénal général, droit pénal des affaires et droit international des affaires.",
  ogUrl: "https://www.bendelac-avocat.com/",
  ogImage: "https://www.bendelac-avocat.com/img/margaux.jpg",
  twitterCard: "summary",
});
</script>

<template>
  <div
    class="flex items-center justify-center flex-1 w-full h-full px-2 mx-auto bg-gray-500 bg-center bg-no-repeat bg-cover md:px-8 bg-hero-colonnes bg-blend-overlay"
  >
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{
        delay: 2600,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <h1
          class="max-w-xl mx-auto text-3xl font-medium text-center text-white md:text-5xl mix-blend-lighten font-cormorant"
        >
          Avocate en Droit pénal
        </h1>
      </swiper-slide>
      <swiper-slide>
        <h1
          class="max-w-xl mx-auto text-3xl font-medium text-center text-white md:text-5xl mix-blend-lighten font-cormorant"
        >
          Droit pénal des affaires
        </h1>
      </swiper-slide>
      <swiper-slide>
        <h1
          class="max-w-xl mx-auto text-3xl font-medium text-center text-white md:text-5xl mix-blend-lighten font-cormorant"
        >
          Droit international des affaires
        </h1>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

const modules = [Autoplay];
</script>

<template>
  <div
    class="flex items-center justify-center flex-1 w-full h-full px-2 mx-auto bg-gray-500 bg-center bg-no-repeat bg-cover md:px-8 bg-hero-colonnes bg-blend-overlay"
  >
    <swiper
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{
        delay: 2800,
        disableOnInteraction: false,
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
          Avocate en Droit pénal des affaires
        </h1>
      </swiper-slide>
      <swiper-slide>
        <h1
          class="max-w-xl mx-auto text-3xl font-medium text-center text-white md:text-5xl mix-blend-lighten font-cormorant"
        >
          Avocate en Droit international
        </h1>
      </swiper-slide>
    </swiper>
  </div>
  <!-- <div
    class="flex items-center justify-center flex-1 w-full h-full px-2 mx-auto bg-gray-500 bg-center bg-no-repeat bg-cover md:px-8 bg-hero-colonnes bg-blend-overlay"
  >
    <h1
      class="max-w-xl mx-auto text-3xl font-medium text-center text-white md:text-5xl mix-blend-lighten font-cormorant"
    >
      Avocate en Droit pénal, Droit pénal des affaires, Droit international
    </h1>
  </div> -->
</template>

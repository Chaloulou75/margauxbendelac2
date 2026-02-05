<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="fixed z-20 flex items-center space-x-2 md:space-x-4 group bottom-16 md:bottom-20 right-4"
  >
    <div
      class="px-3 py-2 text-sm text-white bg-gray-900/90 rounded-2xl group-hover:bg-gray-900"
    >
      Urgence pénale
    </div>
    <div
      class="flex items-center justify-center p-4 rounded-full bg-gray-900/90 group-hover:bg-gray-900"
    >
      <a href="tel:+33762352298"
        ><span class="sr-only">Urgence pénale</span
        ><PhoneIcon class="w-6 h-6 text-white"
      /></a>
    </div>
  </div>
</template>

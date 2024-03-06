<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="fixed z-20 flex items-center space-x-4 group bottom-20 right-4">
    <div
      class="px-3 py-2 text-sm text-white bg-green-600 rounded-2xl group-hover:bg-green-700"
    >
      Urgence pénale
    </div>
    <div
      class="flex items-center justify-center p-4 bg-green-600 rounded-full group-hover:bg-green-700"
    >
      <a href="tel:+33762352298"><PhoneIcon class="w-6 h-6 text-white" /></a>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="fixed z-20 flex items-center space-x-4 group bottom-4 right-4">
    <div
      class="px-2 py-1.5 bg-green-500 group-hover:bg-green-600 text-sm text-white rounded-xl"
    >
      Urgence pénale: + 33 7 62 35 22 98
    </div>
    <div
      class="flex items-center justify-center p-4 bg-green-500 rounded-full group-hover:bg-green-600"
    >
      <a href="tel:+33762352298"><PhoneIcon class="w-6 h-6 text-white" /></a>
    </div>
  </div>
</template>

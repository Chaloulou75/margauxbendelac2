<script setup>
import { PhoneIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="fixed z-20 flex flex-col items-end space-y-3 bottom-16 md:bottom-20 right-4"
  >
    <NuxtLink
      :to="{ path: '/contact', hash: '#formulaire' }"
      class="flex items-center space-x-2 md:space-x-4 group"
    >
      <span
        class="px-3 py-2 text-sm text-white bg-gray-900/90 rounded-2xl group-hover:bg-gray-900"
      >
        Être rappelé par le cabinet
      </span>
      <span
        class="flex items-center justify-center p-4 rounded-full bg-gray-900/90 group-hover:bg-gray-900"
      >
        <ChatBubbleLeftEllipsisIcon class="w-6 h-6 text-white" />
      </span>
    </NuxtLink>
    <a
      href="tel:+33762352298"
      class="flex items-center space-x-2 md:space-x-4 group"
    >
      <span
        class="px-3 py-2 text-sm text-white bg-gray-900/90 rounded-2xl group-hover:bg-gray-900"
      >
        Urgence pénale
      </span>
      <span
        class="flex items-center justify-center p-4 rounded-full bg-gray-900/90 group-hover:bg-gray-900"
      >
        <PhoneIcon class="w-6 h-6 text-white" />
      </span>
    </a>
  </div>
</template>

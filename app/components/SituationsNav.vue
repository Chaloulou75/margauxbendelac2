<script setup>
import { situations } from "~/data/situations";

const route = useRoute();
const others = computed(() =>
  situations.filter((situation) => situation.href !== route.path),
);
</script>

<template>
  <nav aria-label="Autres situations" class="pt-6 mt-12 border-t border-gray-200">
    <ul class="flex flex-wrap ml-0 space-y-0 text-lg list-none gap-x-6 gap-y-2 md:text-lg">
      <li v-for="situation in others" :key="situation.href">
        <NuxtLink :to="situation.href">{{ situation.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

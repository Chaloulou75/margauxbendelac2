<script setup>
const props = defineProps({
  media: String,
  title: String,
  url: String,
  date: String,
  description: String,
})

const displayUrl = computed(() => new URL(props.url).hostname)
</script>

<template>
    <div class="break-inside-avoid flex flex-col items-start py-4 px-4 md:px-6 mb-8 border border-gray-200 shadow-sm rounded-sm bg-gray-50">
        <h2 class="justify-center mb-4 text-2xl font-semibold text-black md:text-3xl">
            {{ media }}
        </h2>
        <h3 class="justify-center mb-4 text-2xl font-semibold text-black md:text-3xl">
            {{ title }}
        </h3>
        <slot />
        <a :href="url" target="_blank" rel="noreferrer" class="mb-2 text-xl text-black md:text-2xl hover:underline">
            {{ displayUrl }}
        </a>
        <p class="mb-3 text-sm text-gray-500">{{ date }}</p>
        <p class="mb-3 text-xl text-black md:text-2xl md:mb-5">{{ description }}</p>
    </div>
</template>

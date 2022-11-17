<script setup></script>
<template>
  <div class="w-full px-2 py-2 bg-white md:py-6">
    <div
      class="flex flex-col items-center justify-between py-4 mx-auto space-y-1.5 text-sm md:text-base text-black max-w-7xl md:flex-row md:items-center md:space-y-0 sm:px-2 lg:px-8"
    >
      <p class="hidden font-thin md:block">
        {{ new Date().getFullYear() }} &#169;margauxbendelac.com
      </p>
      <NuxtLink to="/mentionslegales" class="font-thin"
        >Mentions Legales</NuxtLink
      >
      <div class="flex items-center justify-between space-x-4 md:hidden">
        <p class="font-thin">
          {{ new Date().getFullYear() }} &#169;margauxbendelac.com
        </p>

        <a
          href="https://charles-jeandey.com"
          rel="noreferrer"
          target="_blank"
          class="font-thin"
          >dev web: charles jeandey</a
        >
      </div>

      <a
        href="https://charles-jeandey.com"
        rel="noreferrer"
        target="_blank"
        class="hidden font-thin md:block"
        >web dev: charles jeandey</a
      >
    </div>
  </div>
</template>

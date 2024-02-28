<script setup></script>
<template>
  <div class="w-full px-2 py-2 bg-white md:py-6">
    <div
      class="flex flex-col items-center justify-between py-4 mx-auto space-y-1.5 text-sm md:text-base text-black max-w-full md:flex-row md:items-center md:space-y-0 sm:px-2 lg:px-8"
    >
      <NuxtLink to="/mentionslegales" class="hidden font-thin md:block"
        >Mentions Legales</NuxtLink
      >
      <p class="font-thin">
        {{ new Date().getFullYear() }} &#169;bendelac-avocat.com
      </p>

      <div class="flex items-center justify-between space-x-4 md:hidden">
        <NuxtLink to="/mentionslegales" class="font-thin"
          >Mentions Legales</NuxtLink
        >

        <NuxtLink to="/politiquedeconfidentialite" class="font-thin"
          >Politique de Confidentialité</NuxtLink
        >
      </div>

      <NuxtLink
        to="/politiquedeconfidentialite"
        class="hidden font-thin md:block"
        >Politique de Confidentialité</NuxtLink
      >
    </div>
  </div>
</template>

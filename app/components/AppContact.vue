<script setup>
import { AtSymbolIcon, PhoneIcon, MapPinIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="flex flex-col items-center justify-start w-full h-auto px-2 pb-12 mx-auto mb-auto md:items-start max-w-7xl md:px-8"
  >
    <div class="pt-16 md:pt-24" id="contactMargaux"></div>
    <h1 class="mb-4 text-3xl font-thin text-black md:mb-8">Contact</h1>

    <section
      class="flex flex-col items-start justify-between w-full space-y-10 md:space-x-6 md:flex-row md:space-y-0"
    >
      <div class="flex flex-col w-full max-w-xl px-4 mx-auto md:px-0">
        <FormContact />
        <div class="mt-8">
          <h2
            class="my-4 text-2xl font-semibold text-center text-black md:text-3xl md:mt-8"
          >
            Nous trouver
          </h2>
          <div class="w-full mx-auto my-4 aspect-[4/3]">
            <LazyGoogleMap />
          </div>
        </div>
        <div class="flex flex-col items-start mx-auto mt-8 space-y-1">
          <h2 class="text-xl font-semibold text-black md:text-2xl">
            Margaux BENDELAC
          </h2>
          <p class="mb-2 text-xl font-medium text-black md:text-2xl">
            Avocate à la Cour
          </p>
          <p class="text-xl font-medium text-black md:text-2xl">
            <span class="inline-block w-4 h-4"><AtSymbolIcon /></span>
            secretariat@bendelac-avocat.com
          </p>
          <p class="text-xl font-medium text-black md:text-2xl">
            <span class="inline-block w-4 h-4"><PhoneIcon /></span> +33 7 62 35
            22 98
          </p>
          <p class="text-xl font-medium text-black md:text-2xl">
            <span class="inline-block w-4 h-4"><MapPinIcon /></span> 9, rue
            Alfred de Vigny
          </p>
          <p class="text-xl font-medium text-black md:text-2xl">75008 Paris</p>

          <p class="text-xl font-medium text-black md:text-2xl">Toque C 245</p>
        </div>
      </div>
    </section>
  </div>
</template>

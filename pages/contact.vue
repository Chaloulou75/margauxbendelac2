<script setup>
import { PhoneIcon, AtSymbolIcon, MapPinIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="flex flex-col items-center justify-start w-full h-auto max-w-full px-2 py-8 mx-auto mb-auto md:px-8 md:items-start"
  >
    <h1
      class="mb-4 text-3xl font-thin text-center text-black sr-only md:mb-8 md:text-left"
    >
      Contact
    </h1>
    <section
      class="flex flex-col items-start justify-between w-full space-y-10 md:space-x-6 md:flex-row md:space-y-0"
    >
      <div class="flex flex-col w-full max-w-4xl px-4 mx-auto md:px-0">
        <LazyFormContact />
        <div class="mt-8">
          <h3
            class="my-4 text-2xl font-semibold text-center text-black md:text-3xl md:mt-8"
          >
            Nous trouver
          </h3>
          <div class="w-full mx-auto my-4 aspect-w-16 aspect-h-9">
            <LazyGoogleMap />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full mx-auto mt-8 space-y-1 md:items-start md:flex-row md:justify-between"
        >
          <div class="hidden md:basis-1/2 md:block">
            <p class="text-xl font-medium text-black md:text-2xl">
              <span class="inline-block w-4 h-4"><AtSymbolIcon /></span>
              <a href="mailto:secretariat@bendelac-avocat.com"
                >secretariat@bendelac-avocat.com</a
              >
            </p>
            <p class="text-xl font-medium text-black md:text-2xl">
              <span class="inline-block w-4 h-4"><PhoneIcon /></span
              ><a href="tel:+33762352298">+ 33 7 62 35 22 98</a>
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-black md:text-2xl">
              Margaux BENDELAC
            </h3>
            <p class="mb-2 text-xl font-medium text-black md:text-2xl">
              Avocate à la Cour
            </p>
            <p class="text-xl font-medium text-black md:text-2xl md:hidden">
              <span class="inline-block w-4 h-4"><AtSymbolIcon /></span>
              <a href="mailto:secretariat@bendelac-avocat.com"
                >secretariat@bendelac-avocat.com</a
              >
            </p>
            <p class="text-xl font-medium text-black md:text-2xl md:hidden">
              <span class="inline-block w-4 h-4"><PhoneIcon /></span
              ><a href="tel:+33762352298"> + 33 7 62 35 22 98</a>
            </p>
            <p class="text-xl font-medium text-black md:text-2xl">
              <span class="inline-block w-4 h-4"><MapPinIcon /></span> 118, rue
              la Boetie
            </p>
            <p class="text-xl font-medium text-black md:text-2xl">
              75008 Paris
            </p>

            <p class="text-xl font-medium text-black md:text-2xl">
              Toque C 2233
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

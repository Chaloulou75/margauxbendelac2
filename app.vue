<template>
  <div
    class="relative flex flex-col justify-between w-full min-h-screen font-ebgaramond"
  >
    <AppNavigation />
    <NuxtPage />
    <LazyAppFooter />
    <Phone />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

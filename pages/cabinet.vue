<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full max-w-full px-2 py-8 mx-auto md:px-8"
  >
    <h1
      class="mb-4 text-3xl font-thin text-center text-black sr-only md:mb-8 md:text-left"
    >
      Le cabinet
    </h1>
    <section
      class="flex flex-col items-start justify-between h-full my-4 space-x-0 md:flex-row md:space-x-12"
    >
      <div class="w-full md:basis-1/2 md:hidden">
        <h2
          class="mb-4 text-xl font-semibold text-justify text-black md:mb-5 md:text-2xl"
        >
          Maître Margaux Bendelac exerce en
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/competences', hash: '#general' }"
            >droit pénal général</NuxtLink
          >,
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/competences', hash: '#affaires' }"
            >droit pénal des affaires</NuxtLink
          >
          et
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/competences', hash: '#internationnal' }"
            >international des affaires</NuxtLink
          >.
        </h2>
        <div class="w-full mb-6 md:hidden">
          <img
            src="~/assets/img/margaux.jpg"
            alt="Maître Margaux Bendelac"
            loading="lazy"
            class="w-full md:w-[50vh] lg:w-[400px] h-auto mx-auto shadow"
          />
        </div>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          Diplômée d’un Master en Droit international des affaires de
          l’Université La Sorbonne – Paris I, Maître Margaux Bendelac a
          également développé une expertise en droit pénal qu’elle met au
          service de ses clients à tous
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/stades-de-la-procedure-penale' }"
            >les stades de la procédure</NuxtLink
          >.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          A l’écoute, réactive et rigoureuse, Maître Margaux Bendelac offre à
          ses clients un accompagnement juridique sur mesure.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          Maître Margaux Bendelac est également chargée d’enseignement en droit
          pénal à l’Université de droit et de sciences politiques de
          Saint-Quentin-en-Yvelines.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          Maître Margaux Bendelac travaille aussi bien en français qu’en
          anglais.
        </p>
      </div>

      <div class="hidden w-full md:basis-1/2 md:block">
        <p
          class="mb-3 text-xl font-semibold text-justify text-black md:mb-5 md:text-2xl"
        >
          Maître Margaux Bendelac exerce en
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/competences', hash: '#general' }"
            >droit pénal général</NuxtLink
          >,
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/competences', hash: '#affaires' }"
            >droit pénal des affaires</NuxtLink
          >
          et
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/competences', hash: '#internationnal' }"
            >international des affaires</NuxtLink
          >.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          Diplômée d’un Master en Droit international des affaires de
          l’Université La Sorbonne – Paris I, Maître Margaux Bendelac a
          également développé une expertise en droit pénal qu’elle met au
          service de ses clients à tous
          <NuxtLink
            class="text-blue-900 underline hover:text-blue-800"
            :to="{ path: '/stades-de-la-procedure-penale' }"
            >les stades de la procédure</NuxtLink
          >.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          A l’écoute, réactive et rigoureuse, Maître Margaux Bendelac offre à
          ses clients un accompagnement juridique sur mesure.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          Maître Margaux Bendelac est également chargée d’enseignement en droit
          pénal à l’Université de droit et de sciences politiques de
          Saint-Quentin-en-Yvelines.
        </p>
        <p class="mb-3 text-xl text-justify text-black md:text-2xl md:mb-5">
          Maître Margaux Bendelac travaille aussi bien en français qu’en
          anglais.
        </p>
      </div>
      <div class="hidden w-full md:basis-1/2 md:block">
        <img
          src="~/assets/img/margaux.jpg"
          alt="Maître Margaux Bendelac"
          loading="lazy"
          class="w-full md:w-[50vh] lg:w-[400px] h-auto mx-auto shadow"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const navigation = [
  { label: "Cabinet", href: "/cabinet" },
  {
    label: "Compétences",
    href: "/competences",
    subItems: [
      {
        label: "Droit pénal général",
        href: "/competences",
        hash: "#general",
      },
      {
        label: "Droit pénal des affaires",
        href: "/competences",
        hash: "#affaires",
      },
      {
        label: "Droit international des affaires",
        href: "/competences",
        hash: "#internationnal",
      },
      {
        label: "Procédure disciplinaire",
        href: "/competences",
        hash: "#proceduredisciplinaire",
      },
    ],
  },
  {
    label: "Stades de la procédure pénale",
    href: "/stades-de-la-procedure-penale",
    subItems: [
      {
        label: "Audition libre",
        href: "/stades-de-la-procedure-penale",
        hash: "#audition",
      },
      {
        label: "Garde à vue",
        href: "/stades-de-la-procedure-penale",
        hash: "#garde-a-vue",
      },
      {
        label: "Composition pénale",
        href: "/stades-de-la-procedure-penale",
        hash: "#composition",
      },
      {
        label: "Comparution sur reconnaissance préalable de culpabilité",
        href: "/stades-de-la-procedure-penale",
        hash: "#comparution",
      },
      {
        label: "Comparution immédiate",
        href: "/stades-de-la-procedure-penale",
        hash: "#comparution-immediate",
      },
      {
        label: "Mise en examen et instruction",
        href: "/stades-de-la-procedure-penale",
        hash: "#mise-en-examen",
      },
      {
        label: "Placement sous contrôle judiciaire ou en détention provisoire",
        href: "/stades-de-la-procedure-penale",
        hash: "#placement",
      },
      {
        label:
          "Audience devant le tribunal correctionnel ou devant la cour d’appel",
        href: "/stades-de-la-procedure-penale",
        hash: "#audience-correctionnel",
      },
      {
        label: "Audience devant la cour d’assises",
        href: "/stades-de-la-procedure-penale",
        hash: "#audience-assises",
      },
      {
        label: "Contentieux pénitentiaire",
        href: "/stades-de-la-procedure-penale",
        hash: "#contentieux",
      },
      {
        label: "Aménagement de peine",
        href: "/stades-de-la-procedure-penale",
        hash: "#amenagement",
      },
    ],
  },
  { label: "Presse", href: "/presse" },
  { label: "Honoraires", href: "/honoraires" },
  { label: "Contact", href: "/contact" },
];
</script>

<template>
  <header
    class="flex flex-wrap py-3 text-sm sm:justify-start sm:flex-nowrap sm:py-0 bg-white text-black w-full z-50 bg-opacity-80 backdrop-filter backdrop-blur-[12px] border-none sticky top-0"
  >
    <nav
      class="relative w-full max-w-full px-4 mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="flex flex-col items-center flex-none text-2xl font-medium text-black hover:text-gray-800 shrink-0"
        >
          <span>Margaux Bendelac</span>
          <span class="text-base">Avocate au Barreau de Paris</span>
        </NuxtLink>
        <div class="sm:hidden">
          <button
            type="button"
            class="flex items-center justify-center text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg hs-collapse-toggle size-9 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden size-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              class="flex-shrink-0 hidden hs-collapse-open:block size-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        class="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
      >
        <div
          class="flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <template v-for="(item, index) in navigation">
            <NuxtLink
              v-if="!item.subItems"
              :key="index"
              :to="item.href"
              :exact-active-class="'shadow'"
              class="px-3 py-2 text-xl font-medium rounded-md active:shadow hover:shadow shrink-0"
              >{{ item.label }}
            </NuxtLink>

            <div
              v-else
              class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4"
            >
              <button
                type="button"
                :class="{ shadow: $route.path === item.href }"
                class="flex items-center w-full px-3 py-2 text-xl font-medium rounded-md active:shadow hover:shadow shrink-0"
              >
                {{ item.label }}
                <svg
                  class="ms-2 size-2.5 text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-auto hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
              >
                <NuxtLink
                  v-for="(subItem, idx) in item.subItems"
                  :key="idx"
                  :to="{ path: subItem.href, hash: subItem.hash }"
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                >
                  {{ subItem.label }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

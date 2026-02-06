<script setup>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const sheetOpen = ref(false);
const route = useRoute();
const openMobileDropdown = ref(null);

function toggleMobileDropdown(index) {
  openMobileDropdown.value =
    openMobileDropdown.value === index ? null : index;
}

watch(sheetOpen, (open) => {
  if (!open) openMobileDropdown.value = null;
});

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
        hash: "#audition-libre",
      },
      {
        label: "Garde à vue",
        href: "/stades-de-la-procedure-penale",
        hash: "#garde-a-vue",
      },
      {
        label: "Composition pénale",
        href: "/stades-de-la-procedure-penale",
        hash: "#composition-penale",
      },
      {
        label: "Comparution sur reconnaissance préalable de culpabilité",
        href: "/stades-de-la-procedure-penale",
        hash: "#comparution-culpabilite",
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
        label:
          "Placement sous contrôle judiciaire ou en détention provisoire",
        href: "/stades-de-la-procedure-penale",
        hash: "#placement-controle",
      },
      {
        label:
          "Audience devant le tribunal correctionnel ou devant la cour d'appel",
        href: "/stades-de-la-procedure-penale",
        hash: "#audience-correctionnel",
      },
      {
        label: "Audience devant la cour d'assises",
        href: "/stades-de-la-procedure-penale",
        hash: "#audience-assises",
      },
      {
        label: "Contentieux pénitentiaire",
        href: "/stades-de-la-procedure-penale",
        hash: "#contentieux-penitentiaire",
      },
      {
        label: "Aménagement de peine",
        href: "/stades-de-la-procedure-penale",
        hash: "#amenagement-peine",
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
    class="flex flex-wrap py-3 text-sm sm:justify-start sm:flex-nowrap sm:py-0 bg-white/80 text-black w-full z-50 backdrop-blur-[12px] border-none sticky top-0"
  >
    <nav
      class="relative w-full max-w-full px-4 mx-auto flex items-center justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex flex-col items-center flex-none text-2xl font-medium text-black hover:text-gray-800 shrink-0"
      >
        <span>Margaux Bendelac</span>
        <span class="text-base">Avocate au Barreau de Paris</span>
      </NuxtLink>

      <!-- Desktop navigation -->
      <NavigationMenu class="hidden sm:flex" :delay-duration="100">
        <NavigationMenuList>
          <template v-for="(item, index) in navigation" :key="index">
            <!-- Simple link (no subItems) -->
            <NavigationMenuItem v-if="!item.subItems">
              <NuxtLink
                :to="item.href"
                :class="[
                  navigationMenuTriggerStyle(),
                  { 'shadow-sm': route.path === item.href },
                ]"
              >
                {{ item.label }}
              </NuxtLink>
            </NavigationMenuItem>

            <!-- Dropdown link (with subItems) -->
            <NavigationMenuItem v-else>
              <NavigationMenuTrigger
                :class="{ 'shadow-sm': route.path === item.href }"
              >
                {{ item.label }}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="flex flex-col w-max">
                  <li v-for="(subItem, idx) in item.subItems" :key="idx">
                    <NavigationMenuLink as-child>
                      <NuxtLink
                        :to="{ path: subItem.href, hash: subItem.hash }"
                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                      >
                        {{ subItem.label }}
                      </NuxtLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </template>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- Mobile hamburger -->
      <div class="sm:hidden">
        <Sheet v-model:open="sheetOpen">
          <SheetTrigger as-child>
            <button
              type="button"
              class="flex items-center justify-center text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg size-9 hover:bg-gray-100"
              aria-label="Toggle navigation"
            >
              <svg
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
            </button>
          </SheetTrigger>
          <SheetContent side="right" class="overflow-y-auto">
            <SheetTitle class="sr-only">Menu de navigation</SheetTitle>
            <div class="flex flex-col gap-y-4 mt-6">
              <template v-for="(item, index) in navigation" :key="index">
                <NuxtLink
                  v-if="!item.subItems"
                  :to="item.href"
                  :class="[
                    'px-3 py-2 text-xl font-medium rounded-md hover:shadow-sm shrink-0',
                    { 'shadow-sm': route.path === item.href },
                  ]"
                  @click="sheetOpen = false"
                >
                  {{ item.label }}
                </NuxtLink>

                <div v-else>
                  <button
                    type="button"
                    :class="[
                      'flex items-center justify-between w-full px-3 py-2 text-xl font-medium rounded-md shrink-0 text-left hover:shadow-sm transition-shadow',
                      { 'shadow-sm': route.path === item.href },
                    ]"
                    @click="toggleMobileDropdown(index)"
                  >
                    {{ item.label }}
                    <svg
                      class="size-5 transition-transform duration-200"
                      :class="{ 'rotate-180': openMobileDropdown === index }"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <Transition
                    enter-active-class="transition-all duration-200 ease-out"
                    enter-from-class="opacity-0 max-h-0"
                    enter-to-class="opacity-100 max-h-[500px]"
                    leave-active-class="transition-all duration-150 ease-in"
                    leave-from-class="opacity-100 max-h-[500px]"
                    leave-to-class="opacity-0 max-h-0"
                  >
                    <div
                      v-show="openMobileDropdown === index"
                      class="ml-4 mt-1 flex flex-col gap-y-1 overflow-hidden"
                    >
                      <NuxtLink
                        v-for="(subItem, idx) in item.subItems"
                        :key="idx"
                        :to="{ path: subItem.href, hash: subItem.hash }"
                        class="flex items-center py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100"
                        @click="sheetOpen = false"
                      >
                        {{ subItem.label }}
                      </NuxtLink>
                    </div>
                  </Transition>
                </div>
              </template>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
</template>

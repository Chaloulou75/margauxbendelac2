<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

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
        hash: "#gav",
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

const navigationMobile = [
  { label: "Cabinet", href: "/cabinet" },
  {
    label: "Compétences",
    href: "/competences",
    subItems: [
      {
        label: "Droit pénal général",
        href: "/competences",
        hash: "#penal-general",
      },
      {
        label: "Droit pénal des affaires",
        href: "/competences",
        hash: "#penal-affaires",
      },
      {
        label: "Droit international des affaires",
        href: "/competences",
        hash: "#internationnal-affaires",
      },
      {
        label: "Procédure disciplinaire",
        href: "/competences",
        hash: "#procedure-disciplinaire",
      },
    ],
  },
  {
    label: "Stades de la procédure pénale",
    href: "/competences",
    hash: "#procedure-disciplinaire",
  },
  { label: "Presse", href: "/presse" },
  { label: "Honoraires", href: "/honoraires" },
  { label: "Contact", href: "/contact" },
];
</script>

<template>
  <Disclosure as="nav" class="bg-white/70 text-black w-full sticky top-0 z-50 backdrop-blur-md border-none"
    v-slot="{ open }">
    <div class="max-w-full px-2 mx-auto md:px-8">
      <div class="relative flex items-center justify-between h-16 md:h-24">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-slate-900">
            <span class="sr-only">Ouvrir menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center justify-center flex-1 md:items-stretch md:justify-between">
          <div class="flex items-center shrink-0">
            <NuxtLink to="/"
              class="flex flex-col items-center text-2xl font-medium text-black hover:text-gray-800 shrink-0">
              <span>Margaux Bendelac</span>
              <span class="text-base">Avocate au Barreau de Paris</span>
            </NuxtLink>
          </div>
          <div class="hidden md:ml-6 md:block">
            <div class="flex py-2 space-x-5">
              <template v-for="(item, index) in navigation">
                <NuxtLink v-if="!item.subItems" :key="index" :to="item.href"
                  class="px-3 py-2 text-xl font-medium rounded-md active:shadow-sm hover:shadow-sm active:scale-[0.97] shrink-0">
                  {{ item.label }}</NuxtLink>
                <Disclosure v-else>
                  <template #default="{ open }">
                    <div class="relative">
                      <DisclosureButton
                        class="px-3 py-2 text-xl font-medium rounded-md active:shadow-sm hover:shadow-sm active:scale-[0.97] shrink-0">
                        {{ item.label }}
                      </DisclosureButton>
                      <DisclosurePanel
                        class="absolute left-0 z-10 w-auto mt-1 bg-white rounded-md shadow-lg top-full whitespace-nowrap">
                        <div class="py-1">
                          <NuxtLink v-for="subItem in item.subItems" :key="subItem.label"
                            :to="{ path: subItem.href, hash: subItem.hash }"
                            class="block px-4 py-2 text-base font-medium rounded-md hover:bg-gray-100 active:bg-gray-100">
                            {{ subItem.label }}</NuxtLink>
                        </div>
                      </DisclosurePanel>
                    </div>
                  </template>
                </Disclosure>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink v-for="item in navigationMobile" :key="item.label" :to="item.href"
          class="block px-3 py-1 text-base font-medium rounded-md hover:shadow-sm"
          :aria-current="item.current ? 'page' : undefined">
          <DisclosureButton>{{ item.label }}</DisclosureButton>
        </NuxtLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

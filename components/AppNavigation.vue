<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Cabinet", href: "/cabinet" },
  {
    name: "Compétences",
    href: "/competences",
    subItems: [
      {
        name: "Droit pénal général",
        href: "/competences",
        hash: "#general",
      },
      {
        name: "Droit pénal des affaires",
        href: "/competences",
        hash: "#affaires",
      },
      {
        name: "Droit international des affaires",
        href: "/competences",
        hash: "#internationnal",
      },
      {
        name: "Procédure disciplinaire",
        href: "/competences",
        hash: "#proceduredisciplinaire",
      },
    ],
  },
  { name: "Stades de la procédure pénale", href: "/competences" },
  { name: "Presse", href: "/presse" },
  { name: "Honoraires", href: "/honoraires" },
  { name: "Contact", href: "/contact" },
];
</script>

<template>
  <Disclosure
    as="nav"
    class="bg-white text-black w-full sticky top-0 z-50 bg-opacity-70 backdrop-filter backdrop-blur-[12px] border-none"
    v-slot="{ open }"
  >
    <div class="max-w-full px-2 mx-auto md:px-8">
      <div class="relative flex items-center justify-between h-16 md:h-24">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900"
          >
            <span class="sr-only">Ouvrir menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex items-center justify-center flex-1 md:items-stretch md:justify-between"
        >
          <div class="flex items-center flex-shrink-0">
            <NuxtLink
              to="/"
              class="flex flex-col items-center text-2xl font-medium text-black hover:text-gray-800 shrink-0"
            >
              <span>Margaux Bendelac</span>
              <span class="text-base">Avocate au Barreau de Paris</span>
            </NuxtLink>
          </div>
          <div class="hidden md:ml-6 md:block">
            <div class="flex py-2 space-x-5">
              <template v-for="(item, index) in navigation">
                <NuxtLink
                  v-if="!item.subItems"
                  :key="index"
                  :to="item.href"
                  class="px-3 py-2 text-xl font-medium rounded-md active:shadow hover:shadow active:scale-[0.97] shrink-0"
                  >{{ item.name }}</NuxtLink
                >
                <Disclosure v-else>
                  <template #default="{ open }">
                    <div class="relative">
                      <DisclosureButton
                        class="px-3 py-2 text-xl font-medium rounded-md active:shadow hover:shadow active:scale-[0.97] shrink-0"
                      >
                        {{ item.name }}
                      </DisclosureButton>
                      <DisclosurePanel
                        class="absolute left-0 z-10 w-auto mt-1 bg-white rounded-md shadow-lg top-full whitespace-nowrap"
                      >
                        <div class="py-1">
                          <NuxtLink
                            v-for="subItem in item.subItems"
                            :key="subItem.name"
                            :to="{ path: subItem.href, hash: subItem.hash }"
                            class="block px-4 py-2 text-base font-medium rounded-md hover:bg-gray-100"
                            >{{ subItem.name }}</NuxtLink
                          >
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
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-1 text-base font-medium rounded-md hover:shadow"
          :aria-current="item.current ? 'page' : undefined"
          ><DisclosureButton>{{ item.name }}</DisclosureButton>
        </NuxtLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<!-- :to="{ path: subItem.href, hash: subItem.hash }" -->

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="hidden lg:block h-8 w-auto"
              :src="require('@/assets/logos/la_logo.svg')"
              alt="Luca Arienti"
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              class="
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
              :class="
                $route.fullPath === menuItem.route
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              "
              v-for="menuItem in menuItems"
              :key="menuItem.route"
              :href="menuItem.route"
            >
              {{ menuItem.label }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <a
          v-for="menuItem in menuItems"
          :key="menuItem.route"
          :href="menuItem.route"
          class="
            bg-indigo-50
            border-indigo-500
            text-indigo-700
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
          "
          :class="
            $route.fullPath === menuItem.route
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          "
          >{{ menuItem.label }}</a
        >
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { menuItems } from "@/components/menu/menu.config";

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    const open = ref(false);
    return {
      menuItems,
      open,
    };
  },
});
</script>

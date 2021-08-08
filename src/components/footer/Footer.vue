<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        md:flex md:items-center md:justify-between
        lg:px-8
      "
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in footerConfig"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          Built with ❤️ using Vue3, Typescript, TailwindCSS and Headless UI
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerConfig } from "@/components/footer/footer.config";

export default defineComponent({
  setup() {
    return {
      footerConfig,
    };
  },
});
</script>

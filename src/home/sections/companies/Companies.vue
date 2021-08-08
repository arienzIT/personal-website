<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p
        class="
          text-center text-base
          font-semibold
          uppercase
          text-gray-600
          tracking-wider
        "
      >
        Trusted by average and small businesses
      </p>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div
          class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
          v-for="company in companies"
          :key="company.name"
        >
          <a :href="company.website" target="_blank">
            <img
              class="max-h-12 filter grayscale hover:filter-none"
              :src="company.logo"
              :alt="company.name"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { companies } from "@/home/sections/companies/companies.config";
export default {
  setup() {
    return {
      companies,
    };
  },
};
</script>

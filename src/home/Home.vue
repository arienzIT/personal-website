<template>
  <main>
    <hero />
    <features />
    <companies />
  </main>
</template>

<script>
import Hero from "@/home/sections/Hero.vue";
import Features from "@/home/sections/features/Features.vue";
import Companies from "@/home/sections/companies/Companies.vue";

export default {
  name: "Home",
  components: {
    Companies,
    Features,
    Hero,
  },
};
</script>

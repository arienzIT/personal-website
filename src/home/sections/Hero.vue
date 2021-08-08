<template>
  <main class="lg:relative">
    <div
      class="
        mx-auto
        max-w-7xl
        w-full
        pt-16
        pb-20
        text-center
        lg:pt-28 lg:pb-32 lg:text-left
      "
    >
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <badge>Front-end developer</badge>
        {{ " " }}
        <h1
          class="
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-5xl
            md:text-6xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          <span class="block xl:inline">Luca Arienti</span>
        </h1>
        <p
          class="
            mt-3
            max-w-md
            mx-auto
            text-lg text-gray-500
            sm:text-xl
            md:mt-5 md:max-w-3xl
          "
        >
          I’m a passionate front-end developer with a strong eye for the beauty
          of UI and the quality of the softwares.<br />
          Are you interested in reliable and scalable solutions? Get in touch
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <button-link
              download="luca_arienti_cv"
              :href="require('@/assets/luca_arienti_cv21.pdf')"
              >Download CV
            </button-link>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button-link
              href="mailto:lucarienti@gmail.com"
              :variant="ButtonVariantEnum.SECONDARY"
              >Contact me
            </button-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        justify-center
        w-full
        h-64
        sm:h-72
        md:h-96
        lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full
      "
    >
      <div
        class="
          relative
          z-10
          h-80
          w-80
          rounded-full
          shadow-md
          flex
          items-center
          justify-center
          overflow-hidden
          bg-white
        "
      >
        <img
          class="inset-0 w-72 h-72 object-cover rounded-full"
          src="https://avatars.githubusercontent.com/u/26900606?v=4"
          alt=""
        />
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ButtonLink from "@/components/button-link/ButtonLink.vue";
import { ButtonVariantEnum } from "@/components/button-link/button-link.config";
import Badge from "@/components/Badge.vue";

export default defineComponent({
  components: { Badge, ButtonLink },
  setup() {
    return {
      ButtonVariantEnum,
    };
  },
});
</script>

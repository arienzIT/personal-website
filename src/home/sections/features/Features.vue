<template>
  <div
    :class="`${darkTheme ? 'bg-indigo-900' : 'bg-indigo-700'} overflow-hidden`"
  >
    <div class="max-w-7xl mx-auto">
      <div class="relative flex justify-end pt-6 px-6 z-10">
        <la-switch v-model="darkTheme" />
      </div>
      <div class="relative mx-auto pb-20 pt-16 px-4 sm:px-6 lg:px-8">
        <svg
          class="
            absolute
            top-0
            left-full
            transform
            -translate-x-1/2 -translate-y-3/4
            lg:left-auto lg:right-full lg:translate-x-3/4 lg:translate-y-1/4
          "
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                :class="`${darkTheme ? 'text-indigo-700' : 'text-indigo-500'}`"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="lg:col-span-1">
            <h2
              :class="`
              text-3xl
              font-medium
              tracking-tight
              text-white
              sm:text-4xl
            `"
            >
              {{ serviceSubtitle }} <br /><span
                class="font-extrabold tracking-normal"
                >core features</span
              >
            </h2>
          </div>
          <dl
            class="
              mt-10
              space-y-10
              sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10
              lg:mt-0 lg:col-span-2
            "
          >
            <div v-for="feature in features" :key="feature.name">
              <dt>
                <div
                  :class="`
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-md
                    ${darkTheme ? 'bg-indigo-700' : 'bg-indigo-500'}
                    text-white
                  `"
                >
                  <component
                    :is="feature.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-white">
                  {{ feature.name }}
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-300">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import Switch from "@/components/inputs/Switch.vue";
import { strengths, weaknesses } from "@/home/sections/features/features.config";

export default defineComponent({
  components: {
    LaSwitch: Switch,
  },
  setup() {
    const darkTheme = ref(false);
    const serviceSubtitle = computed(() =>
      darkTheme.value ? "Dark side of" : "What are my"
    );
    const features = computed(() => (darkTheme.value ? weaknesses : strengths));

    return {
      darkTheme,
      serviceSubtitle,
      features,
    };
  },
});
</script>

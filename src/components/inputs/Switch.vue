<template>
  <h-switch
    :modelValue="modelValue"
    @update:modelValue="onInputChange"
    :class="[
      modelValue ? 'bg-indigo-600' : 'bg-gray-200',
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        modelValue ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    >
      <span
        :class="[
          modelValue
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <sun-icon class="text-gray-400" />
      </span>
      <span
        :class="[
          modelValue
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <moon-icon class="text-indigo-800" />
      </span>
    </span>
  </h-switch>
</template>
<script lang="ts">
import { Switch } from "@headlessui/vue";
import { defineComponent } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    HSwitch: Switch,
    MoonIcon,
    SunIcon,
  },
  emits: ["update:modelValue"],
  methods: {
    onInputChange(value: boolean): void {
      this.$emit("update:modelValue", value);
    },
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

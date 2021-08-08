<template>
  <a
    :href="href"
    class="
      w-full
      flex
      items-center
      justify-center
      px-8
      py-3
      border border-transparent
      text-base
      font-medium
      rounded-md
      md:py-4 md:text-lg md:px-10
    "
    :class="dynamicClasses"
  >
    <slot></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<ButtonVariantEnum>,
      default: ButtonVariantEnum.PRIMARY,
      validator: (v: ButtonVariantEnum) =>
        Object.values(ButtonVariantEnum).includes(v),
    },
    href: {
      type: String,
      required: true,
    },
    //@ todo add target values validation
    target: {
      type: String,
    },
    download: {
      type: String,
      default: null,
    },
  },
  computed: {
    dynamicClasses(): string {
      const classes = {
        [ButtonVariantEnum.PRIMARY]:
          "text-white bg-indigo-600 hover:bg-indigo-700",
        [ButtonVariantEnum.SECONDARY]:
          "text-indigo-600 bg-white hover:bg-gray-50",
      };
      return classes[this.variant];
    },
  },
});
</script>

import LinkedIn from "@/components/icons/LinkedIn.vue";
import GitHub from "@/components/icons/GitHub.vue";
import { Component } from "vue";

export interface Social {
  name: string;
  href: string;
  icon: Component;
}

export const footerConfig: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lucaarienti/",
    icon: LinkedIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/arienzIT",
    icon: GitHub,
  },
];

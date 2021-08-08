import {
  ColorSwatchIcon,
  CodeIcon,
  UsersIcon,
  HeartIcon,
} from "@heroicons/vue/outline";

export interface Feature {
  name: string;
  description: string;
  icon: string;
}

export const strengths: Feature[] = [
  {
    name: "Pixel perfect precision",
    description:
      "I love creating stunning, consistent interfaces working very closely with the design and product teams",
    icon: ColorSwatchIcon,
  },
  {
    name: "Clean code",
    description:
      "I always struggle with myself to find out the more clean and reliable solution to implement features",
    icon: CodeIcon,
  },
  {
    name: "User centric mindset",
    description:
      "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
    icon: UsersIcon,
  },
  {
    name: "Passionate",
    description:
      "If I had one euro for each time I bought a course on Udemy or read an article about new technologies",
    icon: HeartIcon,
  },
];

export const weaknesses: Feature[] = [
  {
    name: "Compulsive spacing checking",
    description:
      "I spend most of the day switching between my IDE and the design tool to verify the integrity of the UI",
    icon: ColorSwatchIcon,
  },
  {
    name: "Continuous refactor",
    description:
      "I blame myself everytime I use 'annotate' and discover that I'm the one who wrote that s**t",
    icon: CodeIcon,
  },
  {
    name: "Need of detailed tasks",
    description:
      "I love those long, infinite Jira issues with tons of details. The longer the better, isn't it?! ",
    icon: UsersIcon,
  },
  {
    name: "Spammer",
    description:
      "I usually send a couple of articles per day through dedicated Slack channels. Oh you don't have one? I will take care of it",
    icon: HeartIcon,
  },
];

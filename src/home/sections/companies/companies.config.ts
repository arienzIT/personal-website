type Company = {
  name: string;
  logo: string;
  website: string;
};

export const companies: Company[] = [
  {
    name: "MotorK",
    logo: require("@/assets/logos/motork.png"),
    website: "https://www.motork.io/",
  },
  {
    name: "Sailogy",
    logo: require("@/assets/logos/sailogy.png"),
    website: "https://www.sailogy.com/",
  },
  {
    name: "Commit Software",
    logo: require("@/assets/logos/commit.png"),
    website: "https://www.commitsoftware.it/",
  },
];

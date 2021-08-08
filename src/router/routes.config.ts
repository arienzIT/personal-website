interface RouteConfig {
  name: string;
  path: string;
}

export const routesConfig: { [key: string]: RouteConfig } = {
  home: {
    name: "Home",
    path: "/",
  },
};

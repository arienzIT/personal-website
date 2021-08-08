import { routesConfig } from "@/router/routes.config";

export interface MenuItem {
  label: string;
  route: string;
}

export const menuItems: MenuItem[] = [
  {
    label: routesConfig.home.name,
    route: routesConfig.home.path,
  },
];

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../home/Home.vue";
import { routesConfig } from "@/router/routes.config";

const routes: Array<RouteRecordRaw> = [
  {
    path: routesConfig.home.path,
    name: routesConfig.home.name,
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import dashboardRoutes from "../modules/dashboard/router/index";
import getUser from "../utils/getUser";
import PageNotFound from '../views/PageNotFound.vue';

const BASE_URL = import.meta.env.VITE_BASE_URL || '/';

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "dashboard" },
      meta: {
        requiresAuth: false,
      },
    },
    ...dashboardRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: PageNotFound,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const isLoggedIn = getUser();
  console.log(to, from, isLoggedIn);
  // if (to.meta.requiresAuth && !isLoggedIn) {
  //   return { name: "home", query: { next: to.fullPath } };
  // } else if (isLoggedIn && !to.meta.requiresAuth) {
  //   return { name: "dashboard" };
  // }
});

export default router;

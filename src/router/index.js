import { createRouter, createWebHistory } from "vue-router";
// import LoginPage from '../views/LoginPage.vue'
import MainPage from "../views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/login",
      component: () => import("../views/LoginPage.vue"),
    },
  ],
});

export default router;

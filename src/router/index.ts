import { createRouter, createWebHistory } from "vue-router";
import { MainLayout, LoginLayout } from "@/components/layouts";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: DashboardView,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "/settings",
          name: "settings",
          component: () => import("@/views/SettingsView.vue"),
        },
        {
          path: "/testing",
          name: "testing",
          component: () => import("@/views/TestingView.vue"),
        },
        {
          path: "/blockchain",
          name: "blockchain",
          component: () => import("@/views/TestingView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },
  ],
});

export default router;

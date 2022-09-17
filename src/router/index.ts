import PaymentsVue from "@/views/Payments.vue";
import UsersVue from "@/views/Users.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //@ts-ignore
  routes: [
    //@ts-ignore
    {
      path: "/",
      redirect: "/users",
      // name: "home",
      // component: HomeView
    },
    {
      path: "/users",
      name: "users",
      component: UsersVue
    },
    {
      path: "/payments",
      name: "payments",
      component: PaymentsVue
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

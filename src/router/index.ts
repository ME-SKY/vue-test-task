import PaymentsVue from "@/views/Payments.vue";
import UsersVue from "@/views/Users.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //@ts-ignore //its begin to circurously checkin route types and all of fields is required
    {
      path: "/",
      redirect: "/users",
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
    }
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import VehiclesView from "../views/VehiclesView.vue";
import VehicleDetailView from "../views/VehicleDetailView.vue";
import ContactView from "../views/ContactView.vue";
import BookingView from "../views/BookingView.vue";
import BlogView from "../views/BlogView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/vehicles", component: VehiclesView },
    { path: "/vehicles/:id", component: VehicleDetailView },
    { path: "/contact", component: ContactView },
    {
      path: "/booking/:slug",
      component: BookingView,
    },
    {
      path: "/vehicles/:id",
      component: VehicleDetailView,
    },
    {
      path: "/news",
      component: BlogView,
    },
  ],
});

export default router;

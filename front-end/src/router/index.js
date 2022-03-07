import { createRouter, createWebHistory } from "vue-router";
const NotFound = { template: "<div>Page not found</div>" };
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "browse" */ "../views/Home.vue"),
  },
  { path: "*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

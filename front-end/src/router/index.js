import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Billboard from "../views/create/Billboard";
import Canvas from "../views/create/Canvas";
import UserContent from "../views/create/UserContent";
import SocialMedia from "../views/create/SocialMedia";
import Success from "../views/create/Success";
import PlayerHome from "../views/play/Home";

Vue.use(VueRouter);

const routes = [
  // Billboard Creator App
  {
    path: "/",
    name: "Home",
    alias: "/home",
    component: Home,
  },
  {
    path: "/create", // i.e. "step 1"
    name: "Billboard",
    component: Billboard,
  },
  {
    path: "/create/2", // i.e. "step 2"
    name: "Canvas",
    component: Canvas,
  },
  {
    path: "/create/3", // i.e. "step 3"
    name: "User Content",
    component: UserContent,
  },
  {
    path: "/create/4", // i.e. "step 4"
    name: "Social Media",
    component: SocialMedia,
  },
  {
    path: "/create/done", // i.e. "step 5"
    name: "Success",
    component: Success,
  },

  // Billboard Player App
  {
    path: "/play/:id",
    name: "PlayerHome",
    component: PlayerHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

// create external file (routes.js) to declare our routes and import it as a object

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history", // this mode to ignore default behavior to add # to path
  base: process.env.BASE_URL,
  routes
});

export default router;

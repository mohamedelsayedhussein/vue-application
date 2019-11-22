import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "./routes";

// create external file (routes.js) to declare our routes and import it here

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history", // this mode to ignore default behavior to add # to path
  // علامة الهاش فى الفيو للفصل بين الدومين والراوت .. على يمينها الراوت المسئوله عنه الفيو وعلى شمالها الدومين اللى مسئول عنه السرفر
  // in multi page application all routes (domain + / + route) send to server as a request
  base: process.env.BASE_URL,
  routes: Routes
});

router.beforeEach((to, from, next) => {
  console.log("route guard before : beforeEach");
  next();
});

export default router;

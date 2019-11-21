import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Blogs from "../views/Blogs.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/blogs/1",
    name: "blogs",
    component: Blogs
    // props: true
  }
];

// to create dynamic parameters to rout we create /:argument or parameter (like id) here in routes const and in your router-link you declare this id after path

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Blogs from "../views/Blogs.vue";
import Blog from "../components/Blog.vue";
import Users from "../components/users/Users.vue";
import UsersHome from "../components/users/UsersHome.vue";
import UsersView from "../components/users/UsersView.vue";
import NotFound from "../components/NotFound";

export default [
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
    component: Contact,
    beforeEnter: (to, from, next) => {
      console.log(" route guard before : beforeEnter");
      next();
    }
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs
  },
  {
    path: "/blogs/:id",
    name: "blog",
    // we can use name of route instead of path inside <router-link> it is more easy and in case path is changed route will not changed because route depend on name
    // also in case we use parameter it's easy to use name of path instead of path inside <router-link>
    // important note: if you use name instead of path dont forget to bind "to attribute "
    component: Blog,
    props: true
  },
  {
    path: "/users",
    name: "users",
    component: Users,
    children: [
      // we use nested routes to use <router-view> in many places to show route component (children) inside another route component (users) in the same page
      // ,,, again ,, children and parent components rendered in one page using nested routes
      { path: "", component: UsersHome },
      { path: ":myUser", component: UsersView, props: true }
      // لاحظ عدم كتابة سلاش قبل الباراميتر عشان السلاش هتخليه يبدأ من أول الروت مش من اول اليوزرس وكأن الراوت شكله كده (localhost:8080/id)
      // واحنا عاوزينه ابن لليوزرس يعنى يكون شكله كده (localhost:8080/users/id)
    ]
  },
  // {
  //   path: "*",
  //   redirect: "/"
  // },
  // path to go home automatic when user write wrong route
  {
    path: "*",
    component: NotFound
  }
];

// to create dynamic parameters to route we create /:argument or parameter (like id) here in setting up routes and in your router-link you declare this id after path

// ========
// route guards
// ==============
// ==================
// نقوم بعمل حمايه للراوت بواسطة الراوت جارد وهى لها وظيفتان
//  عمل وظيفه معينه قبل دخول اليوزر الى صفحه معينه او قبل الخروج منها

// 1- beforeEnter: (to, from, next) => {
// console.log('');
// next()
// }
// =======================================
// ونكتب هذه الصيغه داخل اوبجكت الباث فى هذه الصفحه
// beforeRouteEnter(to, from ,next) {
//next()
// }
// وتكتب هذه الصيغه داخل الكومبوننت

// =======================================

// router.beforeEach((to, from, next) => {
//   console.log("route guard before : beforeEach");
//   next();
// });
// وتكتب هذه الصيغه داخل المكان اللى متعرف فيه الراوتر اللى هو اندكس.جى اس
// ويكون الجارد جلوبال على كل الراوتس

// ======================
// ملحوظه : يتم تنفيذ الجارد المكتوب فى الجلوبال اولا ثم المكتوب فى اوبجكت الباث فم المكتوب داخل الكومبوننت
// ==========================

// =====================
// 2- beforeRouteLeave(to, from ,next) {
//   next()
// }
// وهى تكتب داخل الكومبوننت فقط ووظيفتها عمل وظيفه معينه قبل الخروج من الكزمبوننت ويوجد مثال عليها فى كومبوننت ال الكونتاكت

// ===================
// =================
// =================
// ملحوظه مهمه : يمكن كتابة باراميتر داخل نيكست بقيمه فولس بوليان لعدم دخول او خروج اليوزر من او الى الراوت
// وبمكن ان يكون البارامبتر عباره عن باث

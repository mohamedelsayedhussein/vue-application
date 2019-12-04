import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from "./components/Header";

// globally component
// note : with global component you can use its selector inside any component without import it and without register it inside components object because it is global
//فى هذا الملف لاحظ وجود /. فى اى باث بنعمله امبورت

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import "./filters.js"; // global filter
import "./directives"; //global custom directive
Vue.component("header-component", Header);

Vue.directive("font", {
  bind: function(el, binding) {
    el.style.fontSize = binding.value + "px";
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//  here you can import globally staff

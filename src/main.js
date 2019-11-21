import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/normalize.css";
import "./scss/style.scss";

import "./filters.js"; // global filter
import "./directives"; //global custom directive

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

import Vue from "vue";

Vue.directive("bg", {
  bind: function(el) {
    el.style.backgroundColor = "#ccc999";
  }
});

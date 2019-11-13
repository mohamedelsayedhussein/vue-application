import Vue from "vue";

Vue.filter("upercase", function(v) {
  return v.toUpperCase();
});

import Vue from "vue";

Vue.directive("bg", {
  bind: function(el) {
    el.style.backgroundColor = "#ccc999";
  }
});

// eslint-disable-next-line prettier/prettier
const animatedScrollObserver = new IntersectionObserver(function(elements, animatedScrollObserver) {
  elements.forEach(function(element) {
    if (element.isIntersecting) {
      element.target.classList.add("enter");
      animatedScrollObserver.unobserve(element.target);
    }
  });
});

Vue.directive("scrollAnimated", {
  bind: function(el) {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  }
});

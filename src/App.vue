<template>
  <div id="root-component">
    <header-component />
    <router-view />
  </div>
</template>

// note: all your comments must be outside the template .. if not yuor comment will be shown in the browser

// <router-view /> is  builtin component tell to router please load the components routes in this place 

// this is the root component

// any component have to contain template mandatory and script is optional but if you declare <script></script> you must add export default{} untill doesn't show any error in yotr inspect

<script>
import Header from "./components/Header.vue";
export default {
  name: "root-component",
  components: {
    "header-component":Header
  }
};
</script>
<style lang="scss">
#root-component {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="root-component">
    <header-component />
  </div>
</template>

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

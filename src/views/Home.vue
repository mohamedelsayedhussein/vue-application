<template>
  <div class="home">

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <input v-focus class="form-control mt-3 w-50 mx-auto" type="text">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <HeaderComponent></HeaderComponent> -->
    <!-- <HeaderComponent /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: "home",
  components: {
    HelloWorld: HelloWorld,
    // HeaderComponent: HeaderComponent,
  },
  directives: {
    focus:  {
      inserted: function (el) {
        el.focus()
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>>

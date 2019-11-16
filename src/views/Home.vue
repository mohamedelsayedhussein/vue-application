<template>
  <div class="home">

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    {{msg}}
    <input v-focus class="form-control mt-3 w-50 mx-auto" type="text">
    <hello-world msg="Welcome to Your Vue.js App" v-for="anyThing in 5" :key="anyThing.textContent"></hello-world>
    <!-- <HeaderComponent></HeaderComponent> -->
    <!-- <HeaderComponent /> -->
    <!-- <header-component></header-component> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: "home",
  data: function () {
    return {
    msg: 'i am message',
    }
  },
  components: {
    // HelloWorld
    "hello-world" : HelloWorld,
    // HeaderComponent: HeaderComponent,
    // 'header-component' : HeaderComponent
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

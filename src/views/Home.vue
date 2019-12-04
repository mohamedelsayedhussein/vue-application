<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png" />
    <p class="text-white">{{msg}}</p>
    <input v-focus class="form-control mt-3 w-50 mx-auto" v-for="anyThing in 3" :key="anyThing.id" type="text">
  <p> {{ count }} </p>
    <!-- <HeaderComponent></HeaderComponent> -->
    <!-- <HeaderComponent /> -->
    <!-- <header-component></header-component> --> <!--recommended -->
  </div>
</template>

<script>
// @ is an alias to /src
// نستخدم @ عشان لو غيرنا مكان الفايل منحتجش نغير الباث
// import HeaderComponent from '@/components/HeaderComponent.vue';

import { Observable } from "rxjs";

export default {
  name: "home",
  data: function () {
    return {
    msg: 'i am message',
    }
  },
  subscriptions() {
    // use VueRx & rxjs 
    return {
      count: new Observable(console.log('obs'))
    }
  },
  components: {
    // HeaderComponent
    // note : key value pairs in ES6 is just define value without key like first one (HeaderComponent)

    // HeaderComponent: HeaderComponent,
    // 'header-component' : HeaderComponent
    // note : this is key value pairs
    // note : you can write key with dash and double quotation mark or camelcase or kababcase because js is case sensetive
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>>

<template>
  <div class="container">
    <test />
    <div class="row mt-5 align-items-center">
      <div class="col-md-6">
        <h3 v-scrollAnimated class="text-white">welcome from contact view</h3>
      </div>
      <div class="col-md-6">
        <img v-scrollAnimated src="https:/placehold.it/400x400" alt="" />
      </div>
    </div>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
import Test from "../components/Test";
export default {
  name: "contact",
  components: {
    Test
  },
  methods: {
    goHome: function() {
      this.$router.push("/");
      // push path to router object
    }
  },
  beforeRouteEnter: function(to, from, next) {
    console.log("route guard before : beforeRouteEnter");
    next();
  },
  beforeRouteLeave: function(to, from, next) {
    if (confirm("Sure?")) {
      next();
    }
  }
};
</script>

<style scoped>
h3 {
  transition-delay: 0.1s !important;
}
img {
  display: block;
  transition-delay: 0.2s !important;
}
.before-enter {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.2s linear;
}
.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>

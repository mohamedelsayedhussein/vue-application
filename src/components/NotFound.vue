<template>
  <div>
    <h1>404</h1>
    <p>THIS PAGE IS NOT FOUND</p>
    <button @click="goHome">GO HOME</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
  font-size: 5rem;
}
p {
  font-size: 3rem;
}
</style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {}
};
</script>

<style scoped lang="scss">
  h1 {
  color: #f07;
  }
</style>
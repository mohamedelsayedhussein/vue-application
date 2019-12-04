<template>
  <div>
    <h1>USERS</h1>
    <router-link to="/users/1">user 1</router-link> |
    <router-link to="/users/2">user 2</router-link>

    <router-view></router-view>
    <!-- <router-view> to show child component here 
            we use <router-view> to make nested routes (nested router-view == we have router-view for UsersHome & UsersView components here inside Users  router-view which in Header component)-->

    <button @click="goBlog">go blog 2</button>
    <!-- go route -->
  </div>
</template>

<script>
export default {
  methods: {
    goBlog: function() {
      this.$router.push({ name: "blog", params: { id: "blog2" } });

      // inside push we declare object contain name(string) of route and params(Object key is paramName and value is paramValue)

      // this.$router.push('/blogs/blog2')
      // another way to push by path
    }
  }
};
</script>

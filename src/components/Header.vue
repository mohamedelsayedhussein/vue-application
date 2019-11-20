<template>
    <div class="wrapper">
        <ul id="nav">
            <router-link to="/" tag="li" exact><a>Home</a></router-link> |
            <router-link to='/contact' tag="li"><a>Contact</a></router-link> |
            <router-link to="/blog" tag="li" replace><a>Blog</a></router-link>
        </ul>
        <router-view />
    </div>
</template>

<script>
export default {
    name : 'header-component',
};

</script>

<style scoped lang="scss">

#nav {
  padding: 30px;
  background: #c25f5f;
  margin: 0;

  li {
    font-weight: bold;
    color: #245280;
    list-style: none;
    display: inline-block;

    a {
      color: inherit;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
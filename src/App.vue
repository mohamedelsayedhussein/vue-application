<template>
  <div id="app">
    <ul id="nav">
      <router-link to="/" tag="li" exact><a>Home</a></router-link> |
      <router-link to="/about" tag="li"><a>About</a></router-link> |
      <router-link to='/contact' tag="li" replace><a>Contact</a></router-link>
    </ul>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

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

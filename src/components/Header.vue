<template>
    <div class="wrapper">
        <ul id="nav">
            <router-link to="/" tag="li" exact><a>Home</a></router-link> |
            <router-link to='/contact' tag="li"><a>Contact</a></router-link> |
            <router-link to="/blogs/1" tag="li"><a>Blog 1</a></router-link> |
            <router-link to="/blogs/2" tag="li" replace><a>Blog 2</a></router-link>
        </ul>
    </div>
</template>
    
//  exact attribute remove active class from home btn when we click to another component and tell to home component take the active class when your path exactly / and only / not /anotherComponent

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
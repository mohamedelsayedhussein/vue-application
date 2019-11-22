<template>
    <div class="wrapper">
        <ul id="nav">
            <router-link to="/" tag="li" exact><a>Home</a></router-link> |
            <router-link to='/contact' tag="li"><a>Contact</a></router-link> |
            <router-link to="/blogs" tag="li" replace><a>Blogs</a></router-link> |
            <!-- route by path -->
            <router-link :to="{name:'blogs'}" tag="li" replace><a>Blogs</a></router-link> |
            <!-- route by name -->
            <router-link to="/blogs/blog1" tag="li" ><a>blog 1</a></router-link> |
            <router-link :to="{name:'blog',params: {id: 'blog1'}, query:{q:5,name:'blog-test'}}" tag="li" ><a>blog 1</a></router-link> |
            <router-link to="/blogs/blog2?q=1&name=the-name" tag="li" ><a>blog 2</a></router-link> |
            <router-link to="/users" tag="li" ><a>users</a></router-link> 
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
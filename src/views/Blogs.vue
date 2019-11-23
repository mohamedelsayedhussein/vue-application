<template>
    <div class="blog-area">
        <h1>BLOGS</h1>
        <router-link to="/blogs/blog1">blog 1</router-link> |
        <router-link to="/blogs/blog2">blog 2</router-link>
        
        <div class="container">
            <div class="row mt-5 " v-if="posts">
                <JsonBlog @emitEvent="name = $event"  v-for="post in posts" v-bind="{ourBlog:post,childName:name,newFN:changeName}" :key="post.id" />
                <!-- لما نعمل بايند لاكتر من خاصيه يفضل نعملهم جوه اوبجكت كما موضح بالاعلى -->
                <!-- <JsonBlog @emitEvent="name = $event" :newFN="changeName" :childName="name" v-for="(post, index) in posts" :key="index" :ourBlog="post"/> -->
            </div>
        </div>
        <p class="text-white my-5"> {{ name }} </p>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
    </div>
</template>

<script>

import JsonBlog from "@/components/JsonBlog.vue";
import JsonPosts from "../json/post.json";
import { mapMutations } from "vuex";    

export default {
    name: "blogs",
    data: function () {
        return {
            posts: JsonPosts,
            name: "parent name",
            newName: "parent data turn to child",
            
        }
    },
    methods: {
        changeName: function() {
            this.name = "new name"
        },
        ...mapMutations(['increment', 'decrement']),
        // iData() {
        //     // this.$store.state.stateProperty++;
        //     this.$store.commit('increment')
        // },
        // dData() {
        //     // this.$store.state.stateProperty--;
        //     this.$store.commit('decrement')
        // }
    },
    components: {
        JsonBlog
    },
}
</script>

<style lang="scss" scoped>

</style>

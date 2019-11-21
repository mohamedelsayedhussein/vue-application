<template>
    <div class="blog-area">
        <!-- {{ id }} -->
        <div class="container">
            <div class="row mt-5 " v-if="posts">
                <JsonBlog @emitEvent="name = $event" :newFN="changeName" :childName="name" v-for="post in posts" :key="post.id" :ourBlog="post"/>
                <!-- <JsonBlog v-for="(post, index) in posts" :key="index" :ourBlog="post"/> -->
            </div>
        </div>
        <p class="text-white my-5"> {{ name }} </p>
    </div>
</template>

<script>

import JsonBlog from "@/components/JsonBlog.vue";
import JsonPosts from "../json/post.json";

export default {
    name: "blogs",
    data: function () {
        return {
            posts: JsonPosts,
            name: "parent name",
            newName: "parent data turn to child",
            // id: this.$route.params.id,
        }
    },
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id
    //     }
    // },
    // props: ['id'],
    methods: {
        changeName: function() {
            this.name = "new name"
        }
    },
    components: {
        JsonBlog
    },
}
</script>

<style lang="scss" scoped>

</style>

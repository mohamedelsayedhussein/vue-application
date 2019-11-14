<template>
    <div class="blog-area">
        <div class="container">
            <div class="row mt-5 " v-if="posts">
                <JsonBlog v-for="post in posts" :key="post.id" :ourBlog="post"/>
                <JsonBlog v-for="(post, index) in posts" :key="index" :ourBlog="post"/>
            </div>
        </div>
    </div>
</template>

<script>

import JsonBlog from "@/components/JsonBlog.vue";
import JsonPosts from "../json/post.json";

export default {
    data: function () {
        return {
            posts: JsonPosts,
        }
    },
    name: "blog",
    components: {
        JsonBlog
    }
}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="blog-area">
        <div class="container">
            <div class="row mt-5">
                <JsonBlog v-for="post in posts" :key="post.id"
                :views="post.views"
                :date="post.date"
                :title="post.title"
                :category="post.category"
                :content="post.content"
                :avatar="post.avatar"
                :author="post.author"/>
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

<template>
    <div class="col-md-4 json-post-box bg-light p-3 my-3 text-left">
        <span class="views">{{views}}</span>
        <br>
        <h2 class="title text-primary">{{title}}</h2>
        <span class="date">{{date}}</span>
        <br>
        <img :src="avatar" alt="" class="avatar">
        <h3 class="category">{{category}}</h3>
        <p class="content">{{content}}</p>
        <h4 class="author">{{author}}</h4>
    </div>
</template>

<script>
export default {
    name: "jsonblog",
    props: ["views","date","category","title","avatar","content","author"],
}
</script>
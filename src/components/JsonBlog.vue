<template>
    <div class="col-lg-4 col-sm-6 json-post-box p-0 my-1 text-left">
        <div class="post-wrap bg-light p-3 h-100">
            <span class="views">{{views}}</span>
            <br>
            <h2 class="title text-primary">{{title}}</h2>
            <span class="date">{{date}}</span>
            <br>
            <img :src="avatar" alt="" class="avatar">
            <h5 class="category">{{category}}</h5>
            <p class="content">{{content}}</p>
            <h4 class="author">{{author}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "jsonblog",
    props: ["views","date","category","title","avatar","content","author"],
}
</script>

<style lang="scss" scoped>
p {
    font-size: .7rem;
    width: 80%;
    line-height: 1;
}
h2,h5,
h4 {
    color: #0687d1;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.post-wrap {
    margin: 0 .2rem;
}
</style>
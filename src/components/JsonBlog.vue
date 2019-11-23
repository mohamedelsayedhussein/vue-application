<template>
    <div class="col-lg-4 col-sm-6 json-post-box p-0 my-1 text-left">
        <div class="post-wrap bg-light p-3 h-100">
            {{ doubleStateProperty }}<br>
            {{ secondGetters }}<br>
            <span v-color class="views">{{ourBlog.views}}</span>
            <br>
            <h2 v-font.bold='10' class="title text-primary">{{ourBlog.title | reverseFilter | upercase}}</h2>
            <span v-bg class="date p-2">{{ourBlog.date}}</span>
            <br>
            <img :src="ourBlog.avatar" alt="" class="avatar">
            <h5 class="category">{{ourBlog.category}}</h5>
            <p class="content">{{ourBlog.content}}</p>
            <h4 class="author">{{ourBlog.author}}</h4>
            <p> {{childName}} </p>
            <button @click="changeName">change</button>
            <button @click="newFN">click</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "jsonblog",
    // props: ["ourBlog"], unvalidated props
    // props: {
    //     ourBlog : Object
    // },
    props: {
        ourBlog: {
            required: true,//this component may only used if this property is passed
            // default: "", does not declared if required is true (override required)
            type: Object
        },
        childName: {
            type: String
        },
        newFN: {
            type: Function
        }
        // validated props
        /* note: you can use props inside child like normal property .. 
         you can access it with this.props and you can call it inside mustache syntax like normal property*/
    },
    methods: {
        changeName: function() {
            this.childName = "child name";
            this.$emit('emitEvent', this.childName)
        }
    },
    computed: {
        ...mapGetters(['doubleStateProperty', 'secondGetters']),
        // dataFromStore: function() {
        //     // return this.$store.state.stateProperty
        //     return this.$store.getters.doubleStateProperty;
        // },
        // anotherDataFromStore: function() {
        //     return this.$store.getters.secondGetters;
        // }
    },
    filters: {
        reverseFilter :  function(v) {
        return v.split("").reverse().join("")
        }
    },
    directives: {
        color: {
            bind: function(el) {
                el.style.color = "orange"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    font-size: .6rem;
    width: 80%;
    line-height: 1;
}
h2,h5,
h4 {
    color: #0687d1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.post-wrap {
    margin: 0 .2rem;
}
</style>
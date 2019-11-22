<template>
    <div class="container">
        <div class="row mt-5 align-items-center">
            <div class="col-md-6">
                <h3 class="text-white">welcome from contact view</h3>
            </div>
            <div class="col-md-6">
                <img src="https:/placehold.it/400x400" alt="">
            </div>
        </div>
        <button @click="goHome">Go Home</button>
    </div>
</template>

<script>
export default {
    name: 'contact',

    methods: {
        goHome: function() {
            this.$router.push('/');
            // push path to router object
        }
    },
    beforeRouteEnter: function(to, from, next) {
        console.log('route guard before : beforeRouteEnter')
        next()
    },
    beforeRouteLeave: function (to, from, next) {
        if(confirm('Sure?')) {
            next()
        }
    }
}
</script>
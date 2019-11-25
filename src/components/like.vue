<template>
    <div>
        <div>
            <button v-if="liked" @click="actionToggle" class="btn btn-primary"><i class='fa fa-thumbs-o-up'></i> Like</button>
            <button v-if="!liked" @click="actionToggle" class="btn btn-primary"><i class='fa fa-thumbs-o-down'></i> dislike</button>
        </div>
        <br>
        <p>likes is : {{ likes }} </p>
        <p>namespaced is : {{ sameGetter }} </p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters("firstModule", ["likes", "liked", "sameGetter"])
    },
    methods: {
        ...mapActions("firstModule", ['actionToggle'])
    }
}
</script>
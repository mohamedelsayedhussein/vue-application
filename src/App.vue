<template>
  <div class="text-primary" id="root-component">
    <header-component />
    <!-- header component is global component so we will not import it and we will not register it inside components object -->
    {{ computedFromStoreToRoot }}
    <br />
    <!-- {{ gettersFromStore }} -->
    {{ trippleCounter }}
    <div>
      <app-profile
        :data="profile"
        v-for="profile in profiles"
        :key="profile.id"
      />
      <button v-if="profiles && profiles.length < totalCount" @click="loadMore">
        load more
      </button>
    </div>
    <router-view />
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>
  </div>
</template>

// <router-view /> is builtin component tell to Vue-router please load the
components routes in this place and show them //يعنى بالبلدى الراوتر فيو بيعرض
الكومبوننت اللى الراوت بتاعه معروض فى اليو ار ال // this is the root component
// any component have to contain template mandatory and script is optional but
if you declare
<script></script>
you must add export default{} untill doesn't show any errors in your inspect

<script>
// import Header from "./components/Header.vue";
import Profile from "./components/AppProfile.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "root-component",
  data: function() {
    return {
      profiles: null,
      page: 1,
      totalCount: null
    };
  },
  components: {
    // "header-component":Header,
    "app-profile": Profile
  },
  computed: {
    ...mapGetters(["trippleCounter"]),
    computedFromStoreToRoot() {
      return this.$store.state.counter;
    }
    // gettersFromStore() {
    //   return this.$store.getters.trippleCounter;
    // }
  },
  methods: {
    getProfiles(page) {
      axios
        .get(`http://localhost:3000/profile?_page=${page}&_limit=2`)
        .then(response => {
          this.profiles = this.profiles
            ? this.profiles.concat(response.data)
            : response.data;
          this.totalCount = response.headers["x-total-count"];
        })
        .catch(erroe => {
          console.log("hey there is some errors!");
        });
    },
    loadMore() {
      this.page++;
      this.getProfiles(this.page);
    }
  },
  mounted() {
    this.getProfiles(this.page);
  }
};
</script>

<style lang="scss">
#root-component {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div>
    <div>
      <button v-if="liked" @click="actionToggle" class="btn btn-primary">
        <i class="fa fa-thumbs-o-up"></i> Like
      </button>
      <button v-if="!liked" @click="actionToggle" class="btn btn-primary">
        <i class="fa fa-thumbs-o-down"></i> dislike
      </button>
    </div>
    <br />
    <transition name="fade">
      <p v-show="liked">likes is : {{ likes }}</p>
    </transition>
    <transition name="slide" appear>
      <p v-show="liked">likes is : {{ likes }}</p>
    </transition>

    <p>namespaced is : {{ sameGetter }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("firstModule", ["likes", "liked", "sameGetter"])
  },
  methods: {
    ...mapActions("firstModule", ["actionToggle"])
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.fade-enter {
}
.fade-enter-active {
  animation: fade-in 0.3s ease forwards;
}
.fade-leave {
}
.fade-leave-active {
  animation: fade-out 0.3s ease forwards;
}
@keyframes fade-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes fade-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>

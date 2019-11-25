const likesModule = {
  namespaced: true,
  state: {
    likes: 0,
    liked: false,
    nameSpacedModule: 1
  },
  getters: {
    sameGetter(state) {
      return state.nameSpacedModule;
    },
    likes: function(state, getters, rootstate) {
      console.log(rootstate.counter);
      return state.likes;
    },
    liked: function(state) {
      return state.liked;
    }
  },
  mutations: {
    toggleLiked(state) {
      state.liked = !state.liked;
    },
    increaseLikes: function(state) {
      state.likes += 1;
    },
    decreaseLikes: function(state) {
      state.likes -= 1;
    }
  },
  actions: {
    actionToggle: function(context) {
      setTimeout(function() {
        context.commit("toggleLiked");

        if (context.state.liked) {
          context.commit("increaseLikes");
        } else {
          context.commit("decreaseLikes");
        }
      }, 500);
    }
  }
};
export default likesModule;

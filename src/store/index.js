import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stateProperty: 5,
    counter: 0
  },
  getters: {
    doubleStateProperty: function(state) {
      return state.stateProperty * 5;
    },
    secondGetters: function(state) {
      return function(x) {
        return state.stateProperty * x;
      };
    },
    trippleCounter(state) {
      return state.counter * 3 + 5;
    }
  },
  mutations: {
    increment: function(state) {
      state.counter++;
    },
    // decrement(state, x) {
    //   state.counter -= x;
    // },
    decrement(state, payload) {
      state.counter -= payload.amount;
    }
  },
  actions: {
    // asynchronousAction: function({ commit }) {
    //   setTimeout(function() {
    //     commit("increment");
    //   }, 3000);
    // }
    asynchronousAction: function(context) {
      setTimeout(function() {
        context.commit("increment");
      }, 3000);
    }
  },
  modules: {}
});

// vuex (centralized store)

// we set property inside state object

// access (show) it in component using  this.$store.state.propertyName inside computed and print the computed to print propertyName

// change it using this.$store.state.propertyName++ inside the component which include the button which include the event

// we can access property in our store to multiple components in computed as we learned but recommended to use getters (function) and access it to multiple components as this.$store.getters.gettersName also inside computed

//  عند استخدام اكثر من جيتر يتم عمل اكسز لهم بنفس الطريفه السابقه داخل الكومبيوتد وهنا نستخدم الماب جيترز ونستدعيها من فيواكس لكى لا نكتب كومبيوتد لكل جيتر و فى التمبلت نستدعى الجيتر بدلا من  الكمبيوتد ونحذف اقواس اوبجكت الكومبيوتد حتى تعمل الماب جيترز وهنا ستظهر مشكله اننا لن نتمكن من اضافه الكومبيوتد الخاصه بنا والحل فى اكما سكربت سكس التى تمكنا من استخدام الثلاث نقاط قبل الماب جيترز ومن ثم اضافة الاقواس الى الكومبيوتد واضافم الكومبيوتد الخاصه بنا

// the purpose from using mapGetters is access getters easily

// mutations is called sometimes a setters (Reverse of getters) and it use to change state from store not from component

// نستخدم الموتيشنز زى الجيترز بالظبط مع استدعاء الماب موتيشنز بنفس الطريقه

// mutations put inside methods property instead of custm event($emit) inside the component

// getters put inside computed property instead of props inside the component

//===================== actions  ==================
//  all Mutations is run synchronously


// synchronous | متزامن
// asynchronous | غير متزامن
// make sense | منطقى
// manipulate | تلاعب
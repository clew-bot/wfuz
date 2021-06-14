import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      loggedIn: false,
    };
  },
  mutations: {
    loggedIn(state) {
      state.loggedIn = true;
    },
  },
});

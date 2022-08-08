import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemize: [],
    check_options: []
  },
  getters: {
  },
  mutations: {
    postItemize (state, list) {
      state.itemize = list
    },
    postStatusList (state, list) {
      state.check_options = list
    }
  },
  actions: {
    postItemize (ctx, list) {
      ctx.commit("postItemize", list)
    },
    postStatusList (ctx, list) {
      ctx.commit("postStatusList", list)
    }
  },
  modules: {
  }
})

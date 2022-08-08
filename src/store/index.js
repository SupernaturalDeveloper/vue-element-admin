import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemize: []
  },
  getters: {
  },
  mutations: {
    postItemize (state, list) {
      state.itemize = list
    }
  },
  actions: {
    postItemize (ctx, list) {
      ctx.commit("postItemize", list)
    }
  },
  modules: {
  }
})

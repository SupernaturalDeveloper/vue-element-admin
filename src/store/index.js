import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overArr: null
  },
  getters: {
  },
  mutations: {
    one (state, val) {
      state.overArr = val
    }
  },
  actions: {
    one (ctx, val) {
      ctx.commit('one', val)
    }
  },
  modules: {
  }
})

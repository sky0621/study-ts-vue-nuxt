import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 as number | null,
    name: "Taro"
  },
  getters: {
    getName(state) {
      // FIXME: 
    }
  },
  mutations: {
    setName(state) {
      // FIXME:
    }
  },
  actions: {
    asyncSetName({state}) {

    }
  }
})

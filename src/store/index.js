import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
      matched_list: null
    },
    mutations:{
      matched_list (state, list) {
        state.matched_list = list
      }
    }
  })

  export default store;
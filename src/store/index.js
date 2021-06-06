import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
      session: null
    },
    mutations:{
      session_in (state, info) {
        state.session = info
      },
      session_out (state) {
        state.session = null
      }
    }
  })

  export default store;
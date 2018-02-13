import Vue from 'vue'
import Vuex from 'vuex'
import csModule from './modules/cs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cs: csModule,
  }
})

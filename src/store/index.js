import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import quantile from './module/quantile'
import map from './module/map'
import geosys from './module/geosys'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    quantile,
    map,
    geosys
  }
})

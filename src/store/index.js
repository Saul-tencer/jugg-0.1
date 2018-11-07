import Vue from 'vue'
import Vuex from 'vuex'
import Connection from './connection/Connection'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'
import OverallMoudle from './overall_moudle/OverallMoudle'
import Task from './task/Task'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API: 'http://localhost:5000/'
  },
  mutations: {},
  modules: {
    Login,
    Connection,
    Dashboard,
    Task,
    OverallMoudle
  }
})

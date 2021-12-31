import Vue from 'vue'
import Vuex from 'vuex'
import UserModel from './model/user'
import SettingModel from './model/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserModel,
    SettingModel
  }
})

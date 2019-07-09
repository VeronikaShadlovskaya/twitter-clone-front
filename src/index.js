
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken(state,token)
    {
      state.token=token;
    }
  },
  actions: {
    setToken(context,token){
      context.commit('setToken',token);
    }
  },
  getters: {
  }
})
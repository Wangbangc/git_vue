// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    repo: null
  },
  mutations: {
    setRepo(state, repo) {
      state.repo = repo;
    }
  },
  actions: {
    setRepo({ commit }, repo) {
      commit('setRepo', repo);
    }
  },
  getters: {
    getRepo(state) {
      return state.repo;
    }
  }
});
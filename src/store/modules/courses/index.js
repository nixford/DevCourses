import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  // lastFetch: null, // Untill implementing caching data, Vuex completely replaced Firebase
  state() {
    return {
      courses: []
    }
  },
  mutations,
  actions,
  getters,
}
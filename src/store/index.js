import { createStore } from 'vuex';

import coursesModule from './modules/courses/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    courses: coursesModule,
    requests: requestsModule
  },
  state() { // separate state which provides id
    return {
      id: new Date().toISOString(),
      requestId: new Date().toISOString(),
    }
  },
  getters: {
    id(state) {
      return state.id;
    },
    requestId(state) {
      return state.requestId;
    }
  }
});

export default store;
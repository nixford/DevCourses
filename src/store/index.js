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
      courseCreatorId: 'c3',
      requestId: 'requestId1',
    }
  },
  getters: {
    courseCreatorId(state) {
      return state.courseCreatorId;
    },
    requestId(state) {
      return state.requestId;
    }
  }
});

export default store;
import { createStore } from 'vuex';

import coursesModule from './modules/courses/index.js';

const store = createStore({
  modules: {
    courses: coursesModule,
  }
});

export default store;
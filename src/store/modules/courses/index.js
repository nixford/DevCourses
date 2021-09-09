import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      courses: [
        {
          id: 'courseId1',
          courseName: 'JavaScript',
          lecturer: 'Lector1',
          areas: ['frontend', 'backend', 'cloud'],
          description: 'Description1',
        },
        {
          id: 'courseId2',
          courseName: 'C#',
          lecturer: 'Lector2',
          areas: ['frontend', 'backend'],
          description: 'Description1',
        },
        {
          id: 'courseId3',
          courseName: 'Java',
          lecturer: 'Lector3',
          areas: ['frontend', 'cloud'],
          description: 'Description1',
        }
      ]
    }
  },
  mutations,
  actions,
  getters,
}
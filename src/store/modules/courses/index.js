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
          lectures: 25,
          areas: ['frontend', 'backend', 'cloud'],
          description: 'Description1',
        },
        {
          id: 'courseId2',
          courseName: 'C#',
          lecturer: 'Lector2',
          lectures: 25,
          areas: ['frontend'],
          description: 'Description1',
        },
        {
          id: 'courseId3',
          courseName: 'Java',
          lectures: 25,
          lecturer: 'Lector3',
          areas: ['backend'],
          description: 'Description1',
        },
        {
          id: 'courseId4',
          courseName: 'Python',
          lectures: 25,
          lecturer: 'Lector4',
          areas: ['backend'],
          description: 'Description1',
        },
        {
          id: 'courseId5',
          courseName: 'AWS',
          lectures: 25,
          lecturer: 'Lector5',
          areas: ['cloud'],
          description: 'Description1',
        }
      ]
    }
  },
  mutations,
  actions,
  getters,
}
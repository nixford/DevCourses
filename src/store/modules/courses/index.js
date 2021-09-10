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
          lecturerName: 'Lector1',
          lectursCount: 25,
          areas: ['frontend', 'backend', 'cloud'],
          description: 'Description1',
        },
        {
          id: 'courseId2',
          courseName: 'C#',
          lecturerName: 'Lector2',
          lectursCount: 25,
          areas: ['frontend'],
          description: 'Description1',
        },
        {
          id: 'courseId3',
          courseName: 'Java',
          lectursCount: 25,
          lecturerName: 'Lector3',
          areas: ['backend'],
          description: 'Description1',
        },
        {
          id: 'courseId4',
          courseName: 'Python',
          lectursCount: 25,
          lecturerName: 'Lector4',
          areas: ['backend'],
          description: 'Description1',
        },
        {
          id: 'courseId5',
          courseName: 'AWS',
          lectursCount: 25,
          lecturerName: 'Lector5',
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
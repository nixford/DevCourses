import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      courses: [
        // {
        //   courseCreatorId: 'courseId1',
        //   courseName: 'JavaScript',
        //   lecturerName: 'Lector1',
        //   lectursCount: 25,
        //   areas: ['frontend', 'backend', 'cloud'],
        //   description: 'Description1',
        // },
        // {
        //   courseCreatorId: 'courseId2',
        //   courseName: 'C#',
        //   lecturerName: 'Lector2',
        //   lectursCount: 25,
        //   areas: ['frontend'],
        //   description: 'Description1',
        // },
        // {
        //   courseCreatorId: 'courseId3',
        //   courseName: 'Java',
        //   lectursCount: 25,
        //   lecturerName: 'Lector3',
        //   areas: ['backend'],
        //   description: 'Description1',
        // },
        // {
        //   courseCreatorId: 'courseId4',
        //   courseName: 'Python',
        //   lectursCount: 25,
        //   lecturerName: 'Lector4',
        //   areas: ['backend'],
        //   description: 'Description1',
        // },
        // {
        //   courseCreatorId: 'courseId5',
        //   courseName: 'AWS',
        //   lectursCount: 25,
        //   lecturerName: 'Lector5',
        //   areas: ['cloud'],
        //   description: 'Description1',
        // }
      ]
    }
  },
  mutations,
  actions,
  getters,
}
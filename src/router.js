import { createRouter, createWebHistory } from 'vue-router';

import CoursesList from '../views/courses/CoursesList.vue';
import Details from '../views/courses/Details.vue';
import Registration from '../views/courses/Registration.vue';
import ContactCourse from '../views/requests/ContactCourse.vue';
import Requests from '../views/requests/Requests.Vue';
import notFound from '../views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      redirect: '/courses'
    },
    {
      path: '/courses',
      component: CoursesList,
    },
    {
      path: '/courses/:id',
      component: Details,
      children: [
        {
          path: 'contact',
          component: ContactCourse,
        }
      ]
    },
    {
      path: '/register',
      component: Registration,
    },
    {
      path: '/requests',
      component: Requests,
    },
    {
      path: '/:notFound(.*)',
      component: notFound,
    }
  ],

});

export default router;
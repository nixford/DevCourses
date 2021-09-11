export default {
  courses(state) {
    return state.courses;
  },
  hasCourses(state) {
    return state.courses && state.courses.length > 0;
  },
  // shouldUpdate(state) { // Untill implementing caching data, Vuex completely replaced Firebase
  //   const lastFetch = state.lastFetch;
  //   if (!lastFetch) {
  //     return true;
  //   }

  //   const currentTimeStamp = new Date().getTime();
  //   return (currentTimeStamp - lastFetch) / 1000 > 60; // returns true if the time since last fetch is more than 1 minute 
  // }
}
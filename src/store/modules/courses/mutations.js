export default {
  addCourse(state, data) {
    state.courses.push(data)
  },
  setCourses(state, data) {
    state.courses = data;
  },
  // setFetchTimestamp(state) { // Untill implementing caching data, Vuex completely replaced Firebase
  //   state.lastFetch = new Date().getTime();
  // },  
}
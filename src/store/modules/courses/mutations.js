export default {
  addCourse(state, data) {
    state.courses.push(data)
  },
  setCourses(state, data) {
    state.courses = data;
  }
}
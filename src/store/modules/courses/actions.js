export default {
  registerCourse(context, data) {
    const courseData = {
      id: context.rootGetters.id,
      courseName: data.courseName,
      lecturerName: data.lecturerName,
      lectursCount: data.lectursCount,
      areas: data.areas,
      description: data.description,
    }

    context.commit('addCourse', courseData)
  }
}
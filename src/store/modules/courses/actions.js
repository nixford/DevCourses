export default {
  async registerCourse(context, data) { // async/await substitute .then() syntax, which will be placed after the fetch
    const courseCreatorId = context.rootGetters.courseCreatorId;
    const courseData = {      
      courseName: data.courseName,
      lecturerName: data.lecturerName,
      lectursCount: data.lectursCount,
      areas: data.areas,
      description: data.description,
    }

    const url = `https://devcourses-53739-default-rtdb.europe-west1.firebasedatabase.app/courses/${courseCreatorId}.json`;

    const response = await fetch(url, {
      method: 'PUT', // if course exist it will update, otherwise it will create new one
      body: JSON.stringify(courseData)
    })

    // const responseData = response.json();

    if (!response.ok) {
      // error hendling
    }

    // The commitment will execute only after fetching the data
    context.commit('addCourse', {
      ...courseData,
      courseCreatorId: courseCreatorId,
    })
  },
  async loadCourses(context) {
    const url = `https://devcourses-53739-default-rtdb.europe-west1.firebasedatabase.app/courses.json`;
    const response = await fetch(url);

    const responseData = await response.json();

    if (!response.ok) {
      // error hendling
    }

    const courses = [];

    for (const key in responseData) {
      const course = {
        courseCreatorId: key,
        courseName: responseData[key].courseName,
        lecturerName: responseData[key].lecturerName,
        lectursCount: responseData[key].lectursCount,
        areas: responseData[key].areas,
        description: responseData[key].description,
      }
      courses.push(course)
    }

    context.commit('setCourses', courses)
  }
}
export default {
  async registerRequest(context, data) {
    const requestData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
      courseName: data.courseName,
    }

    const url = `https://devcourses-53739-default-rtdb.europe-west1.firebasedatabase.app/requests/${data.courseCreatorId}.json`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestData)
    })

    const responseData = response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    requestData.id = responseData.name; // name contains firebase automatically generated id
    requestData.courseCreatorId = data.courseCreatorId;

    context.commit('addRequest', requestData)
  },
  async loadRequests(context) {
    const courseCreatorId = context.rootGetters.courseCreatorId;
    const url = `https://devcourses-53739-default-rtdb.europe-west1.firebasedatabase.app/requests/${courseCreatorId}.json`;
    const response = await fetch(url);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        courseCreatorId: courseCreatorId,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        email: responseData[key].email,
        message: responseData[key].message,
        courseName: responseData[key].courseName,
      }
      requests.push(request)
    }

    context.commit('setRequests', requests)
  }
}
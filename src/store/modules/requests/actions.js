export default {
  registerRequest(context, data) {
    const requestData = {
      requestId: context.rootGetters.requestId,
      creatorId: data.creatorId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
      courseName: data.courseName,
    }

    context.commit('addRequest', requestData)
  }
}
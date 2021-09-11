export default {
  addRequest(state, data) {
    state.requests.push(data)
  },
  setRequests(state, data) {
    state.requests = data;
  }
}
<template>
  <h1>Requests</h1>
  <div v-if="isLoading">
    <p class="message">Loading...</p>
  </div>
  <div v-if="requests.length > 0 && !isLoading" class="request-list-wrapper">
    <div class="request" v-for="request in requests" :key="request.requestId">
      <p>Full name: {{ request.firstName }} {{ request.lastName }}</p>
      <p>Email: {{ request.email }}</p>
      <p>Message: {{ request.message }}</p>
      <p>Course name: {{ request.courseName }}</p>
    </div>
  </div>
  <div v-if="requests.length === 0 && !isLoading">
    <p class="message">No requests found</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requests: [],
      isLoading: false
    };
  },
  methods: {
    getRequests() {
      this.isLoading = true;
      this.requests = this.$store.getters['requests/requests'];
      this.isLoading = false;
    },
    async loadRequests() {     
      this.isLoading = true;  

      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
     
      this.isLoading = false;  
      this.getRequests();
    }
  },
  created() { 
    this.loadRequests();    
  }
};
</script>

<style scoped>
.request-list-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.request {
  background-color: aliceblue;
  border-radius: 64px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

h1 {
  text-align: center;
}

.message {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 25px;
  font-weight: 500;
}
</style>

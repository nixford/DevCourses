<template>
  <h1>Requests</h1>
  <div class="request-list-wrapper">    
    <div class="request"
      v-for="request in getRequests"
      :key="request.requestId"
    >
      <p>Full name: {{ request.firstName }} {{ request.lastName }}</p>
      <p>Email: {{ request.email }}</p>
      <p>Message: {{ request.message }}</p>
      <p>Course name: {{ request.courseName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requests: [],
    }
  },
  computed: {
    getRequests() {
      return this.$store.getters['requests/requests'];
    }
  },
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
</style>
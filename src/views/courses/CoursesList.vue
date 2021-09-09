<template>
  <div>
    <h3>FILTER</h3>
  </div>
  <div v-if="hasCourses">
    <h3>LIST OF COARSES</h3>
    <div class="course"
      v-for="course in filteredCourses"
      :key="course.id"
    >
      {{ course.courseName }}
    </div>
    <div class="buttons-links">
      <button>Refresh</button>
      <router-link to="/register">
        <button>Register new course</button>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>No courses found</p>
  </div>
</template>

<script>
export default {
  computed: {
    filteredCourses() {
      // first 'courses'is the key in modules in store/index.js 
      // second is the function in store/modules/courses/getters.js 
      return this.$store.getters['courses/courses']; 
    },
    hasCourses() {
      return this.$store.getters['courses/hasCourses']; 
    }
  }
}
</script>
<template>
  <div class="details">
    <section class="course-info">
      <h1>{{ selectedCourse.courseName }}</h1>
      <p>Lecturer: {{ selectedCourse.lecturerName }} / Lectures: {{ selectedCourse.lectursCount }}</p>
      <div class="areas-list">
       <div class="area"
          v-for="(area, i) in selectedCourse.areas"
          :key="i"
        >
          {{ area }}
        </div>
    </div>   
    <p class="description">{{ selectedCourse.description }}</p>
    </section>
    <router-view
      :course="selectedCourse"
    >
    </router-view>
    <div class="buttons">      
      <router-link v-if="$route.name === 'courseContact'" :to="`/courses/${selectedCourse.courseCreatorId}`">
        <button>Hide Contacts</button>
      </router-link>  
      <router-link v-else :to="`/courses/${selectedCourse.courseCreatorId}/contact`">
        <button>View Contacts</button>
      </router-link>        
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: null,
      isOpen: false,
    }
  },
  methods: {
    getCourse() {
      this.selectedCourse = this.$store.getters['courses/courses'].find(c => c.courseCreatorId === this.$route.params.id) || {};
    }
  },
  created() {
    this.getCourse();
  }
}
</script>

<style scoped>
.details {
  margin-top: 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.course-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.buttons {
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
}

a {
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 10%;
}

.description {
  width: 50%;
  margin: auto;
  word-break: break-all;
  font-weight: 400;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>

<template>
  <div class="details">
    <section class="course-info">
      <h1>{{ selectedCourse.courseName }}</h1>
      <p>Lecturer: {{ selectedCourse.lecturer }} / Lectures: {{ selectedCourse.lectures }}</p>
      <div class="areas-list">
       <div class="area"
          v-for="(area, i) in selectedCourse.areas"
          :key="i"
        >
          {{ area }}
        </div>
    </div>   
    <p>{{ selectedCourse.description }}</p>
    </section>
    <router-view></router-view>
    <div class="buttons">
      <router-link :to="`/courses/${selectedCourse.id}/contact`">
        <button>View Contacts</button>
      </router-link>
      <button>Sign up</button>
    </div>    
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCourse: null,
    }
  },
  methods: {
    getCourse() {
      this.selectedCourse = this.$store.getters['courses/courses'].find(c => c.id === this.id);
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
</style>

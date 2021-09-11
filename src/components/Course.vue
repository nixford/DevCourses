<template>
  <p>{{ course.courseName }}</p>
  <p>
    Lecturer: {{ course.lecturerName }} / Lectures: {{ course.lectursCount }}
  </p>
  <div class="areas-list">
    <div class="area" v-for="(area, i) in course.areas" :key="i">
      {{ area }}
    </div>
  </div>
  <p class="description">{{ course.description }}</p>
  <div class="buttons">
    <router-link :to="`/courses/${course.courseCreatorId}`">
      <button>View Details</button>
    </router-link>
  </div>
</template>

<script scoped>
export default {
  props: ['course']
};
</script>

<style>
.areas-list {
  display: flex;
  justify-content: center;
}

.area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 30px;
  border: 2px solid black;
  min-width: 150px;
  height: 50px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 40%;
  margin-top: 20px;
  margin-bottom: 15px;
}
button {
  width: 150px;
  height: 35px;
  border-radius: 12px;
  background-color: #ffb402;
  color: white;
  font-size: 15px;
  font-weight: 600;
}

button:hover {
  background-color: #50c7c7;
}

.description {
  width: 80%;
  margin: auto;
  word-break: break-all;
  font-weight: 400;
  font-size: 15px;
  margin-top: 10px;
}
</style>

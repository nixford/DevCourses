<template>
  <h1>{{ course.courseName }}</h1>
    <p>Lecturer: {{ course.lecturerName }} / Lectures: {{ course.lectursCount }}</p>
    <div class="areas-list">
       <div class="area"
          v-for="(area, i) in course.areas"
          :key="i"
        >
          {{ area }}
        </div>
    </div>   
    <p>{{ course.description }}</p>
    <div class="buttons">
      <router-link :to="`/courses/${course.id}`">
        <button>View Details</button>
      </router-link>
    </div>
</template>


<script scoped>
export default {
  props: ['course'],
}
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
  background-color: #FFB402;
  color: white;
  font-size: 15px;
  font-weight: 600;
}

button:hover {
  background-color:#50C7C7;
}
</style>


<template>
  <div class="courses">
    <Filter 
      @change-filters="setFilters"
    />
    <div class="courses-list-wrapper">
      <div class="top-part">
        <p>LIST OF COURSES</p>
        <router-link to="/register">
          <button>Register new course</button>
        </router-link>
      </div>  
      <div v-if="isLoading">
        <p class="message">Loading...</p>
      </div>
      <div v-if="filteredCourses.length > 0 && !isLoading && !error">
        <div 
          v-for="course in filteredCourses" 
          :key="course.courseCreatorId"
          class="course" 
        >
          <Course :course="course" />
        </div>    
      </div>     
       <div v-if="filteredCourses.length === 0 && !isLoading && !error">
        <p class="message">No courses found</p>
      </div> 
      <div v-if="error">
        <p class="message-error">{{ error }}</p>
      </div>     
    </div>
   
  </div>
</template>

<script>
import Course from '../../components/Course.vue';
import Filter from './Filter.vue';
export default {
  components: {
    Course,
    Filter
  },
  computed: {
    filteredCourses() {
      // first 'courses'is the key in modules in store/index.js
      // second is the function in store/modules/courses/getters.js
      const courses = this.$store.getters['courses/courses'];

      return courses.filter(c => {
        console.log(c)
        if (this.activeFilters.frontend && c.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && c.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.cloud && c.areas.includes('cloud')) {
          return true;
        }
        return false;
      })
    },
    hasCourses() {
      return this.$store.getters['courses/hasCourses'];
    }
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        cloud: true,        
      },
      isLoading: false,
      error: null,
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoatches() {     
      this.isLoading = true;  

      try {
        await this.$store.dispatch('courses/loadCourses');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
     
      this.isLoading = false;  
    }
  },
  created() { 
    this.loadCoatches();    
  }
};
</script>

<style scoped>
.top-part {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 3%;
}

.courses {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.courses-list-wrapper {
  width: 60%;
}

.courses-list-wrapper p {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.course {
  background-color: #66b9f8;
  border-radius: 16px;
  text-align: center;
  padding: 1%;
  margin-bottom: 3%;
  color: white;
  font-weight: 600;
}

.top-part p {
  flex-basis: 60%;
  text-align: end;
}

.top-part a {
  flex-basis: 30%;
  text-align: center;
}

.top-part a button {
  height: 60px;
  width: 180px;
  background-color: green;
}

.message {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 25px;
  font-weight: 500;
}

.message-error {
  margin-top: 10%;
  color: red;
}

</style>

<template>
  <div class="form-wrapper">
    <form @submit.prevent="submitForm">
      <div class="form-input">
        <label for="courseName">Course name</label>
        <input type="text" id="courseName" v-model="courseName" />
      </div>
      <div class="form-input">
        <label for="lecturerName">Lecturer name</label>
        <input type="text" id="lecturerName" v-model="lecturerName" />
      </div>
      <div class="form-input areas">
        <label for="lectursCount">Lectures count</label>
        <input type="number" id="lectursCount" v-model.number="lectursCount" />
      </div>
      <p>Development area</p>
      <div class="form-input-areas">
        <div>
          <label for="frontend">Frontend Development</label>
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas"
          />
        </div>
        <div>
          <label for="backend">Backend Development</label>
          <input type="checkbox" id="backend" value="backend" v-model="areas" />
        </div>
        <div>
          <label for="cloud">Cloud</label>
          <input type="checkbox" id="cloud" value="cloud" v-model="areas" />
        </div>
      </div>
      <div class="form-input">
        <label for="description">Description</label>
        <textarea id="description" rows="5" v-model="description" />
      </div>
      <button>Register</button>
    </form>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      courseName: '',
      lecturerName: '',
      lectursCount: null,
      areas: [],
      description: '',
      errorMessage: ''
    };
  },
  methods: {
    isValid() {
      if (!this.courseName || this.courseName.length < 1) {
        this.errorMessage = 'The course name must be at least 1 symbol long';
        return false;
      }
      if (!this.lecturerName || this.lecturerName.length < 2) {
        this.errorMessage = 'The lecturer name must be at least 2 symbols long';
        return false;
      }
      if (!this.lectursCount || this.lectursCount < 1) {
        this.errorMessage = 'The lecturs count must be at least 1';
        return false;
      }
      if (this.areas.length < 1) {
        this.errorMessage = 'You must select at least one development area';
        return false;
      }
      if (!this.description || this.description.length < 5) {
        this.errorMessage = 'The description must be at least 5 symbols long';
        return false;
      }
      return true;
    },
    submitForm() {
      if (this.isValid()) {
        const formData = {
          courseName: this.courseName,
          lecturerName: this.lecturerName,
          lectursCount: this.lectursCount,
          areas: this.areas,
          description: this.description
        };

        this.$emit('save-data', formData);
      }
    }
  }
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-input {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 15px;
}

p,
label {
  text-align: center;
  font-weight: 700;
}

input {
  height: 30px;
}

.form-input-areas {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 3%;
}

.form-input-areas div {
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-input-areas div {
  height: 20px;
}

.form-input-areas div label {
  font-weight: 300;
}

button {
  align-self: center;
}

.error-message {
  color: red;
}
</style>

<template>
  <div class="form-wrapper">
    <form @submit.prevent="submitForm">
      <div class="form-input">
        <label for="firstName">First name</label>
        <input 
          type="text" 
          id="firstName"
          v-model="firstName"
        />
      </div>
      <div class="form-input">
        <label for="lastName">Last name</label>
        <input 
          type="text" 
          id="lastName"
          v-model="lastName"
        />
      </div>
      <div class="form-input areas">
        <label for="email">Email</label>
        <input 
          type="text" 
          id="email"
          v-model="email"
        />
      </div>
      <div class="form-input">
        <label for="message">Message</label>
        <textarea 
          id="message" 
          rows="5"
          v-model="message"
        />
      </div>
      <button>Sign up</button>
    </form>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: ['course'],
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      errorMessage:'',
    }
  },
  methods: {
    isValid() {
      if (!this.firstName || this.firstName.length < 1) {
        this.errorMessage = 'The first name must be at least 2 symbols long';
        return false;
      }
      if (!this.lastName || this.lastName.length < 2) {
        this.errorMessage = 'The last name must be at least 2 symbols long';
        return false;
      }
      if (!this.email) {
        this.errorMessage = 'Please enter your email';
        return false;
      }
      if (!this.message || this.message.length < 5) {
        this.errorMessage = 'The message must be at least 5 symbols long';
        return false;
      }
      return true;
    },
    submitForm() {
      if (this.isValid()) {
          const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
          courseName: this.course.courseName,
        }

        this.$store.dispatch('requests/registerRequest', formData) // namespace/actionName
        this.$router.replace('/requests')
      }      
    }
  }
}
</script>

<style scoped>
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form{
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


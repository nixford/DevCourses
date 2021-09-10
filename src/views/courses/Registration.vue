<template>
  <div>
    <h1>Register course</h1>
    <RegisterForm 
      @save-data="save"
    />
  </div>
</template>

<script>
import RegisterForm from '../../components/RegisterForm.vue';
export default {
  components: {
    RegisterForm
  },
  methods: {
    save(data) {
      this.$store.dispatch('courses/registerCourse', data) // namespace/actionName
      this.$router.replace('/courses')
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
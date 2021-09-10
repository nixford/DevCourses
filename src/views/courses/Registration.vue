<template>
  <div>
    <h1>Register course</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../../components/RegisterForm.vue';
export default {
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
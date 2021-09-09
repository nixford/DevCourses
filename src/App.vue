<template>
  <Header />
  <div class="app-wrapper">    
    <router-view></router-view>    
  </div> 
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
}
</style>

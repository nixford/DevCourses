<template>
  <div class="app-wrapper">
    <Header />
    <div class="router-view-wrapper">    
      <router-view></router-view>    
    </div> 
    <Footer />
  </div>  
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

.app-wrapper {
  height: 100%;
}
</style>

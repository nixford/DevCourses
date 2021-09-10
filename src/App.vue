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
  position: relative;
}

body {
  margin: 0;
}

html, 
body,
#app,
.app-wrapper {
  height: 100%;
}

.app-wrapper {
  position: relative;
  
}

.router-view-wrapper {
  padding-bottom: 150px;
}

.footer-wrapper{
  position: fixed;
  bottom: 0%;
}

</style>

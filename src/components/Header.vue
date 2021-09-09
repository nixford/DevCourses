<template>
  <div class="header-wrapper">
    <div class="logo">
      <h1>
        <router-link to="/">Select Course</router-link>
      </h1>
    </div>
    <div class="nav">
      <nav>        
        <ul>
          <li>
            <router-link to="/courses">All Courses</router-link>
          </li>
          <li>
            <router-link to="/requests">Requests</router-link>
          </li>
        </ul>
      </nav>
      
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #41bead;
  width: 100%;
  height: 80px;  
}

.header-wrapper .logo {
  margin-left: 3%;
  flex-basis: 30%;
}

.header-wrapper .logo h1 a {
  text-decoration: none;
  color: white;
}

.header-wrapper .nav {
  margin-right: 5%;
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header-wrapper .nav nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.header-wrapper .nav nav ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header-wrapper .nav nav ul li {
  margin-left: 10px;
  list-style: none;
  font-weight: 700;
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
}

.header-wrapper .nav nav ul li a:hover {
  color: burlywood;  
}

.header-wrapper .nav nav ul li a {
  text-decoration: none;
  color: white;
}

</style>

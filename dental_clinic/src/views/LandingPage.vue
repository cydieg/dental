<template>
    <div>
      <nav>
        <ul>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </ul>
      </nav>
  
      <div class="container">
        <h1>Welcome to Our Dental Clinic</h1>
        <p>Your smile is our priority!</p>
      </div>
  
      <div class="doctors-attainment">
        <h2>Our Doctors</h2>
        <p>Meet our experienced and friendly team!</p>
        <!-- Add doctor details here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
  }
  
  nav {
    background-color:#00695C;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 10px;
  }
  
  router-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
  
  .doctors-attainment {
    background-color: #ecf0f1;
    padding: 20px;
    margin-top: 20px;
  }
  </style>
  
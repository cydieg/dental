<template>
    <headnav />
    <div>
      <v-container>
        <h1>Dashboard</h1>
      </v-container>
    </div>
   
  </template>
  
  <script>
  import headnav from '@/components/headnav.vue';
  
  export default ({
    name: 'Dashboard',
  
    components: {
      headnav,
    },
  });
  </script>
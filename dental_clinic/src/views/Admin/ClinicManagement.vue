<template>
    <headnav />
    <div>
      <v-container>
        <h1>Clinic Management</h1>
      </v-container>
    </div>
  </template>
  
  <script>
  import headnav from '@/components/headnav.vue';
  
  export default ({
    name: 'ClinicManagement',
  
    components: {
      headnav,
    },
  });
  </script>
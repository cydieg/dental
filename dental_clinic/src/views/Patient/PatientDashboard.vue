<template>
    <PatientHeadNav />
    <div>
        <v-container>
            <h1>Dashboard</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import PatientHeadNav from '@/components/PatientHeadNav.vue';
  
  export default ({
    name: 'PatientDashboard',
  
    components: {
      PatientHeadNav,
    },
  });
  </script>
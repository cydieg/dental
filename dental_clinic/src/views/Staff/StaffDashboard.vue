<template>
    <StaffHeadNav />
    <div>
        <v-container>
            <h1>Dashboard</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import StaffHeadNav from '@/components/StaffHeadNav.vue';
  
  export default ({
    name: 'StaffDashboard',
  
    components: {
        StaffHeadNav,
    },
  });
  </script>
<template>
    <StaffHeadNav />
    <div>
        <v-container>
            <h1>Scheduling</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import StaffHeadNav from '@/components/StaffHeadNav.vue';
  
  export default ({
    name: 'StaffScheduling',
  
    components: {
        StaffHeadNav,
    },
  });
  </script>
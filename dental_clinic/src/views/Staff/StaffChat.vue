<template>
    <StaffHeadNav />
    <div>
        <v-container>
            <h1>Messages</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import StaffHeadNav from '@/components/StaffHeadNav.vue';
  
  export default ({
    name: 'StaffChat',
  
    components: {
        StaffHeadNav,
    },
  });
  </script>
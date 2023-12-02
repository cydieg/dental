<template>
    <PatientHeadNav />
    <div>
        <v-container>
            <h1>Messages</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import PatientHeadNav from '@/components/PatientHeadNav.vue';
  
  export default ({
    name: 'PatientChat',
  
    components: {
        PatientHeadNav,
    },
  });
  </script>
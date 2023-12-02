<template>
    <PatientHeadNav />
    <div>
        <v-container>
            <h1>Mapping</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import PatientHeadNav from '@/components/PatientHeadNav.vue';
  
  export default ({
    name: 'PatientMapping',
  
    components: {
        PatientHeadNav,
    },
  });
  </script>
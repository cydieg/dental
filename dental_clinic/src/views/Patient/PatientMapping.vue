<template>
    <PatientHeadNav />
    <MapWithSearch/>
    <div>
        <v-container>
            <h1>Mapping</h1>
        </v-container>
    </div>
  </template>
  
  <script>
  import PatientHeadNav from '@/components/PatientHeadNav.vue';
  import MapWithSearch from '@/components/MapWithSearch.vue';
  
  export default ({
    name: 'PatientMapping',
  
    components: {
        PatientHeadNav,
        MapWithSearch
    },
  });
  </script>
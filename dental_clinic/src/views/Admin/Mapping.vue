<template>
  <div>
    <!-- Other components or content -->
    <headnav/>
    <MapWithSearch></MapWithSearch>
  </div>
</template>

<script>
import headnav from '@/components/headnav.vue';
import MapWithSearch from '@/components/MapWithSearch.vue'; // Adjust the path accordingly

export default {
  components: {
    headnav,
    MapWithSearch
  },
  // Other configuration and methods
};
</script>

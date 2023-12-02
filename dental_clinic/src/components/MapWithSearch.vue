<template>
    <v-container fluid>
      <!-- Search Bar -->
      <v-row class="mb-3">
        <v-col>
          <v-text-field v-model="searchQuery" label="Search location" @input="searchLocation" />
        </v-col>
      </v-row>
  
      <!-- Map -->
      <v-row>
        <v-col>
          <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="tileLayerUrl"></l-tile-layer>
            <l-marker v-if="selectedLocation" :lat-lng="selectedLocation" @click="bookmarkLocation"></l-marker>
          </l-map>
        </v-col>
      </v-row>
  
      <!-- Bookmarked Locations -->
      <v-row class="mt-3">
        <v-col>
          <v-list>
            <v-subheader>Bookmarked Locations</v-subheader>
            <v-list-item v-for="(location, index) in bookmarkedLocations" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ location.name }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn @click="centerMap(location.latLng)" icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
 <script>
 export default {
   name: 'MapWithSearch',
   data() {
     return {
       zoom: 13,
       center: [51.505, -0.09], // Example center coordinates
       tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // OSM tile layer URL
       searchQuery: '',
       selectedLocation: null,
       bookmarkedLocations: [],
     };
   },
   methods: {
     searchLocation() {
       // Implement your search functionality here
       // You can use a geocoding service like OpenCage or Mapbox
       // Update this.selectedLocation with the result
     },
     bookmarkLocation() {
       if (this.selectedLocation) {
         const bookmark = {
           name: `Bookmark ${this.bookmarkedLocations.length + 1}`,
           latLng: [...this.selectedLocation],
         };
         this.bookmarkedLocations.push(bookmark);
         this.selectedLocation = null;
       }
     },
     centerMap(latLng) {
       this.center = latLng;
     },
   },
 };
 </script>
 
<style scoped>
/* Add scoped styles for this component */
.l-map {
  border: 1px solid #ccc;
}
</style>
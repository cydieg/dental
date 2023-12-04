<template>
  <div>
    <v-card>
      <v-col>
        <v-row>
        <v-container>
          <div id="map" style="width: 100%; height: 550px;"></div>
        </v-container>
      </v-row>
      </v-col>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'MapWithSearch',
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const map = L.map('map').setView([13.3833, 121.1833], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([13.3833, 121.1833])
        .addTo(map)
        .bindPopup('Calapan, Oriental Mindoro, Philippines')
        .openPopup();
    },
  },
};
</script>

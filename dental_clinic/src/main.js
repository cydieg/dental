import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
window.L = L;


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

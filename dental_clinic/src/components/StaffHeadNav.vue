<template>
    <nav>
      <v-toolbar app color="teal-darken-3" scroll-behavior="inverted">
        <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span>Dental Clinic</span>
        </v-toolbar-title>
  
        <template #append>
          <v-btn icon class="mr-2">
            <v-badge dot color="error">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
          </v-btn>
          
          <v-menu>
            <template #activator="{props}">
              <v-avatar v-bind="props">
                <v-img cover src="https://th.bing.com/th/id/R.978f3ce503054c652939edd49c8ec14b?rik=2TGuFQrmsom1Zw&riu=http%3a%2f%2fwww.sujaltechnologies.com%2fwp-content%2fuploads%2f2016%2f10%2fAdmin.png&ehk=oSsL1SBIk187O0ma3%2fQijDsmg4VNE6G5xXMo4j%2fVPtQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></v-img>
              </v-avatar>
            </template>
  
            
          </v-menu>
        </template>
      </v-toolbar>

      <v-navigation-drawer v-model="isDrawerOpen" color="teal-darken-3">
        <v-img src=""
                cover>
              <div class="text-center mt-4">
                  <v-avatar class="mb-4" color="grey-darken-1" size="64">
                      <v-img aspect-ratio="30" src="https://th.bing.com/th/id/R.978f3ce503054c652939edd49c8ec14b?rik=2TGuFQrmsom1Zw&riu=http%3a%2f%2fwww.sujaltechnologies.com%2fwp-content%2fuploads%2f2016%2f10%2fAdmin.png&ehk=oSsL1SBIk187O0ma3%2fQijDsmg4VNE6G5xXMo4j%2fVPtQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
                  </v-avatar>
                  <h2 class="text-yellow-lighten-5">Staff</h2>
              </div>
          </v-img>
  
          <v-divider></v-divider>
  
        <v-list>
          <!--<v-list-subheader>Menu</v-list-subheader>-->
          <v-list-item to="/staff_dashboard" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
          <v-list-item to="/staff_dashboard/staff_scheduling" prepend-icon="mdi-calendar-clock">Scheduling</v-list-item>
          <v-list-item to="/staff_dashboard/staff_chat" prepend-icon="mdi-message">Chat</v-list-item>
        </v-list>
          
      </v-navigation-drawer>
    </nav>
  </template>
  
  <script>
  export default {
      name: 'PatientHeadNav',
      data: () => ({
          isDrawerOpen: true,
      }),
  }
  </script>
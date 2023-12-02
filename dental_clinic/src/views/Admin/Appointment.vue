<template>
    <headnav />
    <div>
      <v-container>
        <h1>Appointment</h1>
        </v-container>

<!--Dialog-->
<v-container>
  <v-row justify="end">
    <v-dialog
      v-model="dialog"
      persistent
      width="700"
      height="600"
      
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="teal-darken-3"
          v-bind="props"
        >
          Add Appointment
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Schedule Appointment</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal-darken-3"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="teal-darken-3"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</v-container>

      <v-container>
        <v-card fluid>
        <v-row justify="space-around">
          <v-col col="12">
            <v-date-picker  width="100%" color="teal-darken-3"></v-date-picker>
          </v-col>
        </v-row>
        </v-card>
        </v-container>

</div>
</template>

  <script>
  import headnav from '@/components/headnav.vue';
  
  export default ({
    name: 'Appointment',
    data: () => ({
    dialog: false,
  }),
    components: {
      headnav,
    },
  });
  </script>
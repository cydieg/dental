<template>
  <div>
    <headnav />
    <v-container>
      <h1>Patient Management</h1>
    </v-container>

    <!-- Dialog -->
    <v-container>
      <v-row justify="end">
        <v-dialog v-model="dialog" persistent width="700" height="600">
          <template v-slot:activator="{ props }">
            <v-btn color="teal-darken-3" v-bind="props">Add Patient</v-btn>
          </template>

            <v-card>
              <v-card-title>
                <span class="text-h5">Patient Information</span>
              </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- ... Your form fields here ... -->
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
              <v-btn color="teal-darken-3" variant="text" @click="dialog = false">Close</v-btn>
              <v-btn color="teal-darken-3" variant="text" @click="saveDoctor">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>

   <v-card>
      <v-col>
        <v-row>
          <v-container>
            <!-- Data Table -->
            <v-data-table :headers="headers" :items="desserts" :sort-by="[{ key: 'calories', order: 'asc' }]">
              <template v-slot:top>
                <v-toolbar flat>
                  <v-btn color="primary" dark class="mb-2">List of Patient</v-btn>
                </v-toolbar>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon size="small" class="me-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
              </template>

              <!--<template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
              -->
            </v-data-table>
          </v-container>
        </v-row>
      </v-col>
    </v-card> 
  </div>
</template>

<script>
import headnav from '@/components/headnav.vue';

export default {
  name: 'PatientManagement',
  data: () => ({
    dialog: false,
    headers: [
      // Define your headers here
    ],
    desserts: [
      // Define your data items here
    ],
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    dialogDelete: false,
  }),
  methods: {
    openNewItemDialog() {
      // Implement logic to open the dialog for a new item
      // You can use this.dialog = true; or any other logic
    },
    editItem(item) {
      // Implement logic to edit an item
    },
    deleteItem(item) {
      // Implement logic to delete an item
    },
    initialize() {
      // Implement logic to initialize data
    },
    saveDoctor() {
      // Implement logic to save the doctor information
      this.dialog = false; // Close the dialog after saving
    },
  },
  components: {
    headnav,
  },
};
</script>

<template>
    <v-container fluid class="fluid-background">
   <v-row>
      <v-col sm="12">
        <h2
          class="d-flex justify-center" style = "border: solid #CCCCCC">
          Billboard Pozter Selector
          </h2>
        <v-row no-gutters>
          <v-col
            cols="8"
            sm="2"
          >
      <v-card>
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Application
              </v-list-item-title>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
             v-for="option in sidebarOptions"
             :key="option.title"
          >
          <!-- Below is where you would provide the items for the list -->
            <v-list-item link>
                <v-list-item-icon>
                  <v-icon>{{option.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title >{{option.title}}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-navigation-drawer>
      </v-card>
          </v-col>
          <!-- the 2 x 2 in the center -->
            <v-col
              cols="4"
              sm="10"
            >
      <v-row >
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
          <!-- image -->
            <v-img
              :src="card.src"
              contain
              height="400px"
   
            >
            </v-img>
             <div class=" d-flex justify-center" v-text="card.title"></div>
            <v-card-actions>
              <v-spacer></v-spacer>

      
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- button section -->
        <v-row class="mb-6">
        <v-col 
            md="1"
            offset-md="8"
            >
            <div>  
            <v-btn>Cancel</v-btn>
            </div>
            </v-col>
               <v-col 
                md="1"
                offset-md="1"
            >
            <div>  
               <v-btn color="orange">
              Next
              </v-btn>
            </div>
          
            </v-col>
            </v-row>
      </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-container>

</template>

<script>
// @ is an alias to /src
import DataService from "../../../service/dataService";

export default {
  name: "Step 3. User Content",
  data() {
    return {
      billboard: {},
      billboards: [],
      sidebarOptions: [
        {title: 'My Files', icon: 'mdi-folder'},
        {title: 'Shared with me', icon: 'mdi-account-multiple'},
        {title: 'Starred', icon: 'mdi-star'},
        {title: 'My Files', icon: 'mdi-folder'},
        {title: 'Shared with me', icon: 'mdi-account-multiple'},
        {title: 'Starred', icon: 'mdi-star'},
        {title: 'My Files', icon: 'mdi-folder'},
        {title: 'Shared with me', icon: 'mdi-account-multiple'},
        {title: 'Starred', icon: 'mdi-star'},
        {title: 'My Files', icon: 'mdi-folder'},
        {title: 'Shared with me', icon: 'mdi-account-multiple'},
        {title: 'Starred', icon: 'mdi-star'},
        {title: 'My Files', icon: 'mdi-folder'},
        {title: 'Shared with me', icon: 'mdi-account-multiple'},
        {title: 'Starred', icon: 'mdi-star'},
      ],
      cards: [
        { title: 'Click to browse files:', src: require('../../assets/canvas_1.jpg'), flex: 12 },
       
      ],
    };
  },
  async mounted() {
    await this.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");
    await this.fetchBillboards();
  },
  computed: {},
  methods: {
    async fetchBillboardId(id) {
      this.billboard = await DataService.fetchBillboardId(id);
    },
    async fetchBillboards() {
      this.billboards = await DataService.fetchBillboards();
    },
  },
};
</script>

<style scoped>

</style>




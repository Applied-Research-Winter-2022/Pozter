<!-- Template is body in only vue component -->
<template>
  <!-- v container creates a grid system for sub components -->
  <v-container>
    <v-row>
    <!-- This V-col tag encompasses all sub components -->
      <v-col sm="12">
      <!-- This the header d-flex adds flexbox and justify-center is a flexbox attribute to center it-->
        <h2 class="d-flex justify-center" style="border: solid #cccccc">
          Billboard Pozter Selector
        </h2>
        <!-- The no gutters removes negative margins and padding -->
        <v-row no-gutters>
        <!-- This v-col is responsible for the spaceing of the side bar via cols -->
          <v-col cols="8" sm="2">
          <!-- This is the side-bar implemenatation -->
            <v-card>
              <v-navigation-drawer permanent>
                <v-list-item>
                <!-- this list item content is the top of the side bar component -->
                  <v-list-item-content>
                  <!-- Title sub componenet of sidebar -->
                    <v-list-item-title class="text-h6">
                      Application
                    </v-list-item-title>
                    <!-- sub component -->
                    <v-list-item-subtitle>
                    subtext 
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <!-- This v-list item containts the actual side bar options  -->
                <!-- javascript in vue tags we loop option in sidebarOptions -->
                <!-- the key option.title is effectively a primary key it needs 
                to be there to access the elements of the array i.e. sidebarOptions -->
                <!-- The v-for and key makes the v-list item loop for however many
                  items in the list  -->
                <v-list
                  dense
                  nav
                  v-for="option in sidebarOptions"
                  :key="option.title"
                >
                  <!-- Below is where you would provide the items for the list -->
                  <!--  -->
                  
                  <v-list-item link>
                    <v-list-item-icon>
                       <v-icon>
                       {{ option.icon }}
                        </v-icon>
                    </v-list-item-icon>

                      <v-list-item-title>
                      {{ option.title }}
                      </v-list-item-title>
                  </v-list-item>
                </v-list>
               
                
              </v-navigation-drawer>
            </v-card>
          </v-col> 
          <!-- side bar ends here -->

          <!-- Poster options begin -->
          <!-- the 2 x 2 in the center -->
          <!-- the v-col sm set to 10 because 2 sm="2" already taken by sidebar
          only 12 spaces available for any given row -->
          <v-col  sm="10">
            <!-- Row of cards formatted in a column  -->
            <v-row>
              <v-col 
              v-for="card in cards" 
              :key="card.title" 
              :cols="card.flex">
              <!-- v-card holding the image src and the title from javascript array
              called "cards" putting it all together in a column picture first
              then the text because it goes up then down -->

                <v-card>
                  <!-- components of this v-card -->
                  <v-img 
                  :src="card.src" 
                  contain height="200px"> 
                  </v-img>

                  <v-card-title
                    class="justify-center"
                    v-text="card.title"
                  ></v-card-title>
                </v-card>
              </v-col>
              
              <!-- button section containg 2 buttons
              offsetted the first button by 8 and then the second
              button by 1 from that component-->
              <v-row class="mb-6">
                <v-col md="1" offset-md="8">
                  <div>
                    <v-btn>Cancel</v-btn>
                  </div>
                </v-col>
                <v-col md="1" offset-md="1">
                  <div>
                    <v-btn color="orange"> Next </v-btn>
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

<!-- Javascript below -->
<script>
// @ is an alias to /src
import DataService from "../../../service/dataService";

export default {
  name: "Step 1. Billboard",
  data() {
    return {
      billboard: {},
      billboards: [],
      // The options for sidebar options housed in this array
      sidebarOptions: [
        { title: "Home", icon: "mdi-folder" },
        { title: "Account", icon: "mdi-account-multiple" },
        { title: "Favorites", icon: "mdi-star" },
        { title: "Back", icon: "mdi-arrow-left" },
        { title: "Shared with me", icon: "mdi-account-multiple" },
        { title: "Starred", icon: "mdi-star" },
        { title: "My Files", icon: "mdi-folder" },
        { title: "Shared with me", icon: "mdi-account-multiple" },
        { title: "Starred", icon: "mdi-star" },
        { title: "My Files", icon: "mdi-folder" },
        { title: "Shared with me", icon: "mdi-account-multiple" },
        { title: "Starred", icon: "mdi-star" },
        { title: "My Files", icon: "mdi-folder" },
        { title: "Shared with me", icon: "mdi-account-multiple" },
        { title: "Starred", icon: "mdi-star" },
      ],
      // This cards correspond to the 4 poster options
      cards: [
        {
          title: "CF Bay-Dundas Digital",
          src: require("../../assets/canvas_1.jpg"),
          flex: 6,
        },
        {
          title: "CFTEC Tower Digital",
          src: require("../../assets/canvas_2.jpg"),
          flex: 6,
        },
        {
          title: "AOBOne Digital Screen",
          src: require("../../assets/canvas_1.jpg"),
          flex: 6,
        },
        {
          title: "AOB Two Digital Screen",
          src: require("../../assets/canvas_1.jpg"),
          flex: 6,
        },
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

<style scoped></style>

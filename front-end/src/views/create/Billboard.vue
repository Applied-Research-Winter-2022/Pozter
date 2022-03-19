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
          <!-- side bar ends here -->

          <!-- Poster options begin -->
          <!-- the 2 x 2 in the center -->
          <!-- the v-col sm set to 10 because 2 sm="2" already taken by sidebar
          only 12 spaces available for any given row -->
          <v-col sm="10">
            <!-- Row of cards formatted in a column  -->
            <v-row>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <!-- v-card holding the image src and the title from javascript array
              called "cards" putting it all together in a column picture first
              then the text because it goes up then down -->

                <v-card>
                  <!-- components of this v-card -->
                  <v-img :src="card.src" contain height="200px"> </v-img>

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
                    <router-link to="/">
                      <v-btn>Cancel</v-btn>
                    </router-link>
                  </div>
                </v-col>
                <v-col md="1" offset-md="1">
                  <div>
                    <router-link to="/create/2">
                      <v-btn color="deep-orange lighten-1">Next</v-btn>
                    </router-link>
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
  name: "Billboard",
  data() {
    return {
      billboard: {},
      billboards: [],
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

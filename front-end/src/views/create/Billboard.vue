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
              <v-col v-for="bb in billboards" :key="bb.id" :cols="6">
                <!-- v-card holding the image src and the title from javascript array
              called "cards" putting it all together in a column picture first
              then the text because it goes up then down -->
                <BillboardCard
                  :id="bb.id"
                  :billboardName="bb.billboard_name"
                  :venue="bb.venue"
                />
              </v-col>
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
import BillboardCard from "../../components/Billboard/BillboardCard.vue";

export default {
  name: "Step1Billboard",
  components: {
    BillboardCard,
  },
  data() {
    return {
      billboard: {},
      billboards: [],
    };
  },
  async mounted() {
    await this.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");
    console.log("billboard: " + JSON.stringify(this.billboard));
    await this.fetchBillboards();
    console.log("billboards: " + JSON.stringify(this.billboards));
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

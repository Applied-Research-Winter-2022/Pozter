<template>
  <v-container>
    <v-row v-if="selectedScreen !== null" class="pt-12 w-100 justify-content-center">
      <ScreenCanvasPreview :name="selectedScreen.text" :config="selectedScreen? selectedScreen.config : null" />
    </v-row>
    <v-row>
      <v-flex>
        <div class="screens pa-12">
          <v-row>
            <v-col>
              <v-select
                v-model="selectedScreen"
                :items="screens"
                label="Select a Screen Canvas"
                solo
                return-object
              ></v-select>
            </v-col>
          </v-row>
        </div>
      </v-flex>
    </v-row>
    <v-flex xs12 pa-4>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-row class="mb-6">
          <v-col md="2" offset-md="8">
            <div>
              <router-link to="/">
                <v-btn>Cancel</v-btn>
              </router-link>
            </div>
          </v-col>
          <v-col md="1" offset-md="1">
            <div>
              <v-btn @click="didClickNext" color="deep-orange lighten-1" :disabled="selectedScreen === null">Next</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-flex>
  </v-container>
</template>

<script>
import DataService from "../../../service/dataService";
import ScreenCanvasPreview from "../../components/ScreenCanvasPreview.vue";

export default {
  name: "Step2Canvas",
  components: {
    ScreenCanvasPreview
  },
  props: {},
  data() {
    return {
      screens: [],
      selectedScreen: null,

      billboardId: null,
      userBillboardId: null,
    };
  },
  async mounted() {
    this.billboardId = this.$route.query.billboardId;
    this.userBillboardId = this.$route.query.userBillboardId;

    // if there's no billboard Id in the router query => push them to home page
    if (!this.billboardId) {
      this.$router.push("/");
    }
    this.screens = await DataService.fetchScreenCanvasByBillboardId(this.billboardId);

    // add text and value fields to make the objects palatable to the select list
    this.screens.map(s => {
      s.text = s.screen_canvases_name;
      s.value = s.id;
      return s;
    });

    // sort the names alphabetically
    this.screens.sort((a, b) => {
      if (a.text > b.text) {
        return 1;
      } else if (a.text < b.text) {
        return -1;
      }
      return 0;
    });
  },
  computed: {
    
  },
  methods: {
    directToScreen() {
      alert(`Label: ${this.selectedScreen.text}; Value: ${this.selectedScreen.value}`);
    },
    async didClickNext() {
      if (!this.userBillboardId) {
        const params = {
          user_id: "35a27f4e-9f40-11ec-bbaa-bba14276ac27",
          user_billboard_name: "New - " + Date.now(),
          description: "some description",
          socket_url: "something",
          config: {},
        };
        const res = await DataService.createUserBillboard(params);
        this.userBillboardId = res.data[0].id;
      }
      this.$router.push({
        path: "3", // go to the next page
        query: {
          billboardId: this.billboardId,
          screenCanvasId: this.selectedScreen.id, // send the screen canvas id chosen by the user to the next page
          userBillboardId: this.userBillboardId,
        },
      });
    },
  },
};
</script>

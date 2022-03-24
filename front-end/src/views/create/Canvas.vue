<template>
  <v-container>
    <v-row>
      <v-flex>
        <div class="screens pa-12">
          <v-row>
            <v-col md="12" sm="6">
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
              <router-link to="/create/3">
                <v-btn color="deep-orange lighten-1">Next</v-btn>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Step2Canvas",
  props: {},
  data() {
    return {
      screens: [
        { text: "One Screen Canvas", value: "oneScreen" },
        { text: "Three Screens Canvas", value: "threeScreens" },
      ],
      selectedScreen: null,
    };
  },
  mounted() {
    console.log(this.$route.query);
    // from this.$route.query, we can get billboardId. using the DataService we can get all hte screen canvases associated with that billboardId
  },
  computed: {},
  methods: {
    directToScreen() {
      alert(
        `Label: ${this.selectedScreen.text}; Value: ${this.selectedScreen.value}`
      );
      console.log("Label: ", this.selectedScreen.texy);
      console.log("Value: ", this.selectedScreen.value);
    },
  },
};
</script>

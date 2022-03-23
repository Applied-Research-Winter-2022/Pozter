<template>
  <v-container>
    <v-row>
      <v-flex>
        <div class="hashtag pa-12">
          <v-row>
            <v-col md="12" sm="6">
              <v-text-field
                v-model="hashtag"
                label="Enter a hashtag"
                color="indigo darken-4"
                full-width
                solo
                width="80px"
                height="20px"
              ></v-text-field>
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
              <router-link to="/create/done">
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
  name: "Step4SocialMedia",
  props: {},
  data() {
    return {
      links: ["Link 1", "Link 2", "Link 3", "Link 4"],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
</style>
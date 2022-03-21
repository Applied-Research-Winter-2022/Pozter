<template>
  <div>
    <v-app id="inspire">
      <v-toolbar color="deep-orange lighten-4" elevation="3" max-height="9vh">
        <v-container class="py-0 fill-height">
          <v-avatar class="mr-10" color="grey darken-1" size="32">
            <img src="../../assets/pozter.png" contain alt="Pozter" />
          </v-avatar>

          <v-btn v-for="link in links" :key="link" text>
            {{ link }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-container>
      </v-toolbar>

      <v-main class="grey lighten-3 pt-2 pt-md-0">
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-flex hidden-sm-and-down>
                <v-sheet elevation="2" rounded="lg">
                  <v-list color="deep-orange lighten-4 rounded">
                    <v-list-item v-for="n in 5" :key="n" link>
                      <v-list-item-content>
                        <v-list-item-title>
                          List Item {{ n }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-sheet>
              </v-flex>
            </v-col>

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

          <v-flex xs12 pa-3>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>Cancel</v-btn>
              <v-btn color="deep-orange lighten-4">Next</v-btn>
            </v-card-actions>
          </v-flex>
        </v-container>
      </v-main>
    </v-app>
  </div>
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
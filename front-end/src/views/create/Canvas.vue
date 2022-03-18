<template>
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
                      <v-list-item-title> List Item {{ n }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-flex>
          </v-col>

          <v-flex>
            <div class="screens pa-12">
              <v-row>
                <v-col md="12" sm="6">
                  <v-select
                    :items="screens"
                    label="Select a Screen Canvas"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </div>
          </v-flex>
        </v-row>
        <v-flex xs12 pa-4>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Cancel</v-btn>
            <v-btn color="deep-orange lighten-4">Next</v-btn>
          </v-card-actions>
        </v-flex>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Step 2. Canvas",
  props: {},
  data() {
    return {
      links: ["Link 1", "Link 2", "Link 3", "Link 4"],
      screens: [
        { text: "One Screen Canvas", value: "oneScreen" },
        { text: "Three Screens Canvas", value: "threeScreens" },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
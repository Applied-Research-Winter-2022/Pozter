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
          <v-col md="2">
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

          <v-col md="9">
            <v-sheet
              min-height="65vh"
              max-height="125vh"
              min-width="70vh"
              rounded="lg"
              color="deep-orange lighten-4"
            >
              <div class="screen d-flex justify-center pa-4">
                <v-card
                  rounded="lg"
                  elevation="3"
                  class="deep-orange lighten-5 overflow-hidden"
                  min-height="60vh"
                  max-height="120vh"
                  min-width="60vh"
                  width="120vh"
                  @click.stop="selectImage"
                >
                  <input
                    id="fileInput"
                    class="d-none"
                    type="file"
                    accept="image/*"
                    @input="updateValue"
                  />
                  <v-fade-transition mode="out-in">
                    <v-img v-if="image" aspect-ratio="1" :src="image">
                      <v-row class="fill-height" align="end" justify="center">
                        <v-slide-y-reverse-transition>
                          <v-sheet
                            v-if="mask"
                            color="error"
                            width="100%"
                            height="100%"
                            class="mask"
                          />
                        </v-slide-y-reverse-transition>
                        <v-btn
                          class="mb-3"
                          fab
                          x-small
                          color="error"
                          @click.stop="deleteImage"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </v-row>
                    </v-img>
                    <v-row
                      v-else
                      class="
                        d-flex
                        flex-column
                        align-center
                        justify-center
                        fill-height
                      "
                    >
                      <v-icon> mdi-paperclip </v-icon>
                      <span class="mt-3">Upload Screen Canvas</span>
                    </v-row>
                  </v-fade-transition>
                </v-card>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-flex>
          <v-col md="9">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="deep-orange lighten-4">Create Another Screen</v-btn>
              <v-btn color="deep-orange lighten-4"
                >Configure Social Media</v-btn
              >
            </v-card-actions>
          </v-col>
        </v-flex>
        <v-flex>
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
// @ is an alias to /src
import DataService from "../../../service/dataService";
export default {
  name: "Step 3. User Content",
  props: {},
  data() {
    return {
      input: undefined,
      image: undefined,
      imageFile: undefined,
      mask: false,
      links: ["Link 1", "Link 2", "Link 3", "Link 4"],
    };
  },
  async mounted() {
    await this.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");
    await this.fetchBillboards();
    this.input = document.getElementById("fileInput");
  },
  computed: {},
  methods: {
    async fetchBillboardId(id) {
      this.billboard = await DataService.fetchBillboardId(id);
    },
    async fetchBillboards() {
      this.billboards = await DataService.fetchBillboards();
    },
    selectImage() {
      if (!this.imageFile) {
        this.input.click();
      }
    },
    updateValue(event) {
      this.imageFile = event.target.files[0];
      this.image = this.imageFile
        ? URL.createObjectURL(this.imageFile)
        : undefined;
      this.$emit("input", this.imageFile);
    },
    deleteImage() {
      if (this.imageFile) {
        this.imageFile = undefined;
        this.image = undefined;
        this.mask = false;
        this.input.value = "";
        this.$emit("input", undefined);
      }
    },
  },
};
</script>
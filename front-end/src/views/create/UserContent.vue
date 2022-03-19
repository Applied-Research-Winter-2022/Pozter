<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="9">
          <v-sheet
            min-height="65vh"
            max-height="125vh"
            min-width="70vh"
            rounded="lg"
            color="deep-orange lighten-2"
          >
            <div class="screen d-flex justify-center pa-4">
              <v-card
                rounded="lg"
                elevation="3"
                class="deep-orange lighten-4 overflow-hidden"
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
                    <span class="mt-3">Upload a Screen Canvas</span>
                  </v-row>
                </v-fade-transition>
              </v-card>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-flex>
        <v-col md="7">
          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link to="/create/3">
              <v-btn class="mx-3 deep-orange lighten-2"
                >Create Another Screen</v-btn
              >
            </router-link>
            <router-link to="/create/4">
              <v-btn class="mx-3 deep-orange lighten-2"
                >Configure Social Media</v-btn
              >
            </router-link>
          </v-card-actions>
        </v-col>
      </v-flex>
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
  </div>
</template>

<script>
// @ is an alias to /src
import DataService from "../../../service/dataService";
export default {
  name: "UserContent",
  props: {},
  data() {
    return {
      input: undefined,
      image: undefined,
      imageFile: undefined,
      mask: false,
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
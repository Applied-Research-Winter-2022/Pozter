<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-file-input
            multiple
            label="Upload a Screen Canvas"
            chips
            @change="onAddFiles"
          />

          <v-card v-if="files.length > 0">
            <v-card-text>
              <v-alert
                type="success"
                v-for="file in files"
                :key="file.public_id"
              >
                File uploaded: {{ file.original_filename }} at {{ file.url }}
              </v-alert>
            </v-card-text>
          </v-card>

          <v-alert v-if="isError">
            {{ errorText }}
          </v-alert>
        </v-col>
      </v-row>
      <v-flex>
        <v-col md="9">
          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link to="/create/2">
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
  name: "Step3UserContent",
  props: {},
  data() {
    return {
      files: [],
      isError: false,
      errorText: null,
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
    onAddFiles(files) {
      if (files.length > 0) {
        files.forEach((file) => {
          window.console.log(file);
          this.uploadFileToCloudinary(file).then((fileResponse) => {
            this.files.push(fileResponse);
          });
        });
      }
    },
    uploadFileToCloudinary(file) {
      return new Promise(function (resolve, reject) {
        // ideally these to lines would be in a .env file
        const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/pozter/upload";
        const CLOUDINARY_UPLOAD_PRESET = "affgwoft";
        let formData = new FormData();
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", "cloudinary-demo");
        formData.append("file", file);
        let request = new XMLHttpRequest();
        request.open("POST", CLOUDINARY_URL, true);
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.onreadystatechange = () => {
          // uploaded successfully
          if (request.readyState === 4 && request.status === 200) {
            let response = JSON.parse(request.responseText);
            resolve(response);
          }
          // not uploaded
          if (request.status !== 200) {
            let response = JSON.parse(request.responseText);
            let error = response.error.message;
            this.errorText = "error uploading files " + error;
            this.isError = true;
            reject(error);
          }
        };
        request.onerror = (err) => {
          alert("error: " + err);
          reject(err);
        };
        request.send(formData);
      });
    },
  },
};
</script>

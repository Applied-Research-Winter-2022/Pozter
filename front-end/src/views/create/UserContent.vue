<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            label="Upload a Screen Canvas"
            chips
            @change="onAddFile"
          />
          <v-card v-if="didUploadImage === true">
            <v-card-text>
              <v-alert type="success">
                File uploaded: {{ file.original_filename }} at {{ file.url }}
              </v-alert>
            </v-card-text>
          </v-card>
          <v-card v-if="previewUrl">
            <v-card>
              <v-responsive :aspect-ratio="16 / 9">
                <v-img id="preview" class="ma-6" :src="previewUrl"></v-img>
              </v-responsive>
            </v-card>
          </v-card>

          <v-alert v-if="isError">
            {{ errorText }}
          </v-alert>
        </v-col>
      </v-row>
      <!-- Buttons start -->
      <v-flex xs12 pa-4>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-row class="mb-6">
            <v-col md="4" offset-md="0">
              <div>
                <router-link to="/create/2">
                  <v-btn class="mx-3 deep-orange lighten-2">Create Another Screen</v-btn>
                </router-link>
              </div>
            </v-col>

            <v-col md="2" offset-md="0">
              <div>
                <v-btn
                  :disabled="!isImageSelected"
                  @click="uploadFile"
                  color="green lighten-2"
                  >Upload</v-btn
                >
              </div>
            </v-col>
            <v-col md="" offset-md="0">
              <div>
                <router-link
                  :disabled="!didUploadImage"
                  :event="didUploadImage ? 'click' : ''"
                  to="/create/4"
                >
                  <v-btn :disabled="!didUploadImage" color="deep-orange lighten-1"
                    >Configure Social Media</v-btn
                  >
                </router-link>
              </div>
            </v-col>
          </v-row>
          <!-- buttons end -->
        </v-card-actions>
      </v-flex>
    </v-container>
  </div>
</template>

<!-- JavaScript starts Here -->
<script>
// @ is an alias to /src
import DataService from "../../../service/dataService";
export default {
  name: "Step3UserContent",
  props: {},
  data() {
    return {
      didUploadImage: false,
      isError: false,
      errorText: null,
      previewUrl: null,
      previewFile: null,
      isUploading: false,
      isImageSelected: false,
      file: null,
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
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onAddFile(file) {
      if (!file) {
        return;
      }
      this.didUploadImage = false;
      this.previewFile = file;
      this.createImage(file);
      this.isImageSelected = true;
    },
    uploadFile() {
      // this.isUploading = true;
      this.uploadFileToCloudinary(this.previewFile).then((fileResponse) => {
        this.file = fileResponse;
      });
    },
    uploadFileToCloudinary(file) {
      return new Promise((resolve, reject) => {
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
          this.isUploading = false;
          // uploaded successfully
          if (request.readyState === 4 && request.status === 200) {
            this.didUploadImage = true;
            let response = JSON.parse(request.responseText);
            resolve(response);
          }
          // not uploaded
          if (request.status !== 200) {
            let response = JSON.parse(request.responseText);
            let error = response.error.message;
            this.errorText = "error uploading files " + error;
            this.isError = true;
            this.didUploadImage = false;
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

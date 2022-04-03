<template>
  <div>
    <v-container>
      <v-row v-if="screenCanvas !== null" class="pt-12 w-100 justify-content-center">
        <ScreenCanvasPreview :name="screenCanvas.screen_canvases_name" :config="screenCanvas? screenCanvas.config : null" :image="previewUrl" />
      </v-row>
      <v-row>
        <v-col>
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            label="Upload a Screen Canvas"
            chips
            @change="onAddFile"
            @click:clear="onClear"
          />
          <v-card v-if="didUploadImage === true && this.file">
            <v-card-text>
              <v-alert type="success">
                User Screen created!  
              </v-alert>
            </v-card-text>
          </v-card>
          <v-alert v-if="isError">
            {{ errorText }}
          </v-alert>
        </v-col>
      </v-row>
      <!-- Buttons start -->
      <v-container pt-4>
        <v-row class="w-100 justify-content-center">
          <div>
            <v-btn
              :disabled="!isImageSelected || didUploadImage"
              @click="createUserCanvas"
              color="green lighten-2"
              >
              <span v-if="!isUploading">Create User Screen</span>
              <div v-else class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              </v-btn
            >
          </div>
        </v-row>
        <v-row class="mb-6 w-100 justify-content-center">
          <v-col class="w-100 d-flex justify-content-center">
            <div>
              <!-- <router-link to="/create/2"> -->
              <v-btn @click="didClickCAS" class="mx-3 deep-orange lighten-2"
                :disabled="!didUploadImage"
                >Create Another Screen</v-btn
              >
              <!-- </router-link> -->
            </div>
          </v-col>
          <v-col class="d-flex justify-content-center">
            <div>
              <!-- <router-link
                :disabled="!didUploadImage"
                :event="didUploadImage ? 'click' : ''"
                to="/create/4"
              > -->
              <v-btn
                @click="didClickSM"
                :disabled="!didUploadImage"
                color="deep-orange lighten-1"
                >Configure Social Media</v-btn
              >
              <!-- </router-link> -->
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<!-- JavaScript starts Here -->
<script>
import DataService from "../../../service/dataService";
import ScreenCanvasPreview from "../../components/ScreenCanvasPreview.vue";

export default {
  name: "Step3UserContent",
  components: {
    ScreenCanvasPreview,
  },
  props: {},
  data() {
    return {
      screenCanvas: null,
      userBillboardId: null,

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
    this.billboardId = this.$route.query.billboardId;
    this.userBillboardId = this.$route.query.userBillboardId;

    const screenCanvasId = this.$route.query.screenCanvasId;
    if (!screenCanvasId || !this.userBillboardId || !this.billboardId) {
      this.$router.push("/");
    }
    await this.fetchCanvasId(screenCanvasId);
  },
  methods: {
    async fetchCanvasId(id) {
      this.screenCanvas = await DataService.fetchScreenCanvasId(id);
    },
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    didClickCAS() {
      this.$router.push({
        path: "2", // go to the next page
        query: {
          billboardId: this.$route.query.billboardId, // send the id chosen by the user to the next page
          userBillboardId: this.$route.query.userBillboardId,
        },
      });
    },
    didClickSM() {
      this.$router.push({
        path: "4",
        query: {
          screenCanvasId: this.screenCanvas.id,
          userBillboardId: this.userBillboardId,
        },
      });
    },
    reset() {
      this.didUploadImage = false;
      this.isError = false;
      this.errorText = null;
      this.previewUrl = null;
      this.previewFile = null;
      this.isUploading = false;
      this.isImageSelected = false;
      this.file = null;
    },
    onClear() {
      this.reset();
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
    async createUserCanvas() {
      try {
        this.isUploading = true;
        // upload the image
        let response = await this.uploadFileToCloudinary(this.previewFile);
        this.file = response;
        const imageUrl = this.file.url;

        // create the user screen
        const params = {
          screen_canvas_id: this.screenCanvas.id,
          user_billboard_id: this.userBillboardId,
          user_screen_name: "some name",
          description: "some description",
          config: {
            "type": "image",
            "asset": imageUrl,
            "width": "100%",
            "height": "100%"
          },
        };
        response = await DataService.createUserScreen(params);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      this.isUploading = false;
    },
    uploadFile() {
      return this.uploadFileToCloudinary(this.previewFile);
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

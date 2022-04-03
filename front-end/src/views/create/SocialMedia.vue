<template>
  <v-container>
    <v-row>
      <v-flex>
        <div class="hashtag pa-12">
          <v-row>
            <v-col>
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
              <v-btn color="deep-orange lighten-1" @click="handleFinish">Finish</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-flex>
  </v-container>
</template>

<script>
import DataService from "../../../service/dataService";

export default {
  name: "Step4SocialMedia",
  props: {},
  data() {
    return {
      hashtag: "",
      userBillboardId: null,
    };
  },
  mounted() {
    this.userBillboardId = this.$route.query.userBillboardId;
    if (!this.userBillboardId) {
      this.$router.push("/");
    }
  },
  methods: {
    async handleFinish() {
      try {
        const params = {
          user_billboard_id: this.userBillboardId,
          social_media_content_name: "SCM Name",
          description: "SCM Description",
          config: {
            hashtag: this.hashtag,
          },
        };
        await DataService.createSocialMediaContent(params);
        this.$router.push({
          name: "Success", // go to the next page
          query: {
            userBillboardId: this.userBillboardId,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped></style>

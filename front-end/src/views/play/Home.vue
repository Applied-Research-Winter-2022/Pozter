<template>
  <UserBillboard
    :userScreen="currentUserScreen"
    :screenCanvas="currentScreenCanvas"
    :socialMediaPost="currentSocialMediaPost"
    :socialMediaOverlay="currentSocialMediaOverlay"
  />
</template>

<script>
import io from "socket.io-client";
import DataService from "../../../service/dataService";
import UserBillboard from "./UserBillboard.vue";

export default {
  name: "Home",
  components: {
    UserBillboard,
  },
  props: {},
  data() {
    return {
      userBillboard: {},
      screenCanvases: {},
      userScreens: [],
      socialMediaPosts: [],

      currentUserScreenIndex: 2,
      currentSocialMediaPostIndex: 0,
    };
  },
  async created() {
    const id = this.$route.params.id;
    const config = await DataService.fetchUserBillboard(id);

    // Break apart the user_billboard configuration and extract ONLY the things we need
    //  - user billboard
    this.userBillboard.socket_url = config.socket_url;

    //  - user screens
    this.userScreens = config.user_screens;
    for (const i in this.userScreens) {
      const userScreen = this.userScreens[i];
      if (userScreen.screen_canvases) {
        //  - screen canvases
        const screenCanvas = userScreen.screen_canvases[0];
        this.screenCanvases[screenCanvas.id] = screenCanvas;
      }
    }

    //  - social media posts
    this.socialMediaPosts = config.social_media_content[0].social_media_posts;

    // Set up the socket connection
    const socket = io(this.userBillboard.socketurl);

    socket.on("user-screen-next", () => {
      if (this.currentUserScreenIndex === this.userScreens.length - 1) {
        this.currentUserScreenIndex = 0;
      } else {
        this.currentUserScreenIndex++;
      }
    });
    socket.on("social-media-next", () => {
      if (this.currentSocialMediaPostIndex === this.socialMediaPosts.length - 1) {
        this.currentSocialMediaPostIndex = 0;
      } else {
        this.currentSocialMediaPostIndex++;
      }
    });
  },
  computed: {
    currentUserScreen() {
      if (this.userScreens) {
        return this.userScreens[this.currentUserScreenIndex];
      }
      return null;
    },
    currentSocialMediaPost() {
      if (this.socialMediaPosts) {
        return this.socialMediaPosts[this.currentSocialMediaPostIndex];
      }
      return null;
    },
    currentScreenCanvas() {
      if (this.currentUserScreen) {
        return this.screenCanvases[this.currentUserScreen.screen_canvas_id];
      }
      return null;
    },
    currentSocialMediaOverlay() {
      if (this.currentScreenCanvas) {
        return this.currentScreenCanvas.config.social_media_overlay;
      }
      return null;
    },
  },
  methods: {},
};
</script>

<style scoped>
</style>

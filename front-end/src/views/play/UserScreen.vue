<template>
  <div
    :style="styles"
    style="position: absolute; top: 0; left: 0;"
  >
    <SocialMediaOverlay
      :socialMediaOverlay="socialMediaOverlay"
      :socialMediaPost="socialMediaPost"
    />
  </div>
</template>

<script>
import SocialMediaOverlay from "./SocialMediaOverlay.vue";

export default {
  name: "UserScreen",
  components: {
    SocialMediaOverlay,
  },
  props: {
    userScreen: Object,
    socialMediaOverlay: Object,
    socialMediaPost: Object,
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      if (this.userScreen) {
        if (this.userScreen.config.type === "image") {
          return {
            width: this.userScreen.config.width,
            height: this.userScreen.config.height,
            backgroundImage: `url('${this.userScreen.config.asset}')`,
            backgroundSize: "100% 100%",
          };
        }
      }
      return null;
    },
  },
  methods: {},
};
</script>

<style scoped></style>

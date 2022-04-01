<template>
  <div
    :style="styles"
    style="position: absolute; background-color: rgba(255, 255, 255, 0.5)"
  >
    <SocialMediaPost :socialMediaPost="socialMediaPost" />
  </div>
</template>

<script>
import SocialMediaPost from "./SocialMediaPost.vue";

export default {
  name: "",
  components: {
    SocialMediaPost,
  },
  props: {
    socialMediaOverlay: Object,
    socialMediaPost: Object,
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      console.log(this.socialMediaOverlay);
      if (this.socialMediaOverlay) {
        return {
          width: this.socialMediaOverlay.width,
          height: this.socialMediaOverlay.height,
          top: this.socialMediaOverlay.translateY,
          left: this.socialMediaOverlay.translateX,
        };
      }
      return null;
    },
  },
  methods: {},
};
</script>

<style scoped></style>

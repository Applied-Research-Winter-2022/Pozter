<template>
  <div
    :style="styles"
    style="position: absolute; top: 0; left: 0; background-color: red"
  >
    <UserScreen
      :userScreen="userScreen"
      :socialMediaOverlay="socialMediaOverlay"
      :socialMediaPost="socialMediaPost"
    />
  </div>
</template>

<script>
import UserScreen from "./UserScreen.vue";

export default {
  name: "UserBillboard",
  components: {
    UserScreen,
  },
  props: {
    userScreen: Object,
    screenCanvas: Object,
    socialMediaPost: Object,
    socialMediaOverlay: Object,
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      if (this.screenCanvas) {
        const canvas = this.screenCanvas.config.canvases[0];
        return {
          width: canvas.width,
          height: canvas.height,
        };
      }
      return null;
    },
  },
};
</script>

<style scoped></style>

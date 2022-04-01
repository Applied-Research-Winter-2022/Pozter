<template>
  <div style="background-color: black;" class="position-relative d-flex flex-column rounded" :style="dimensionsStyles">
    <div v-if="!image" class="d-flex flex-column align-items-center pt-4">
      <strong class="w-100 text-muted text-center">
        {{ name }}
      </strong>
      <div class="w-100 text-muted text-center text-sm">
        Width: {{ screenCanvasWidth }}<br>
        Height: {{ screenCanvasHeight }}
      </div>
    </div>
    <img v-else :src="image" style="width: 100%; height: 100%;" />
    <div :style="socialMediaStyles" style="background-color: rgba(255, 255, 255, 0.8); font-size: 8pt;" class="position-absolute d-flex justify-content-center align-items-center">
      <div class="text-center text-muted">
        Social Media Canvas<br>
        ({{ overlay.type }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenCanvasPreview",
  props: [ "name", "config", "image" ],
  data: () => ({

  }),
  methods: {

  },
  computed: {
    screenCanvasWidth() {
      if (this.config !== null) {
        return this.config.canvases[0].width;
      }
      return undefined;
    },
    screenCanvasHeight() {
      if (this.config !== null) {
        return this.config.canvases[0].height
      }
      return undefined;
    },
    dimensionsStyles() {
      if (this.config !== null) {
        const scW = Number.parseFloat(this.screenCanvasWidth);
        const scH = Number.parseFloat(this.screenCanvasHeight);

        const maxHeight = 400;
        return {
          width: ((scW / scH) * maxHeight) + "px",
          height: maxHeight + "px",
        };
      }
      return null;
    },
    overlay() {
      if (this.config !== null) {
        return this.config.social_media_overlay;
      }
      return undefined;
    },
    socialMediaStyles() {
      if (this.config !== null) {
        const top = this.overlay.translateY;
        const left = this.overlay.translateX;
        const width = this.overlay.width;

        return {
          top,
          left,
          width,
          height: "35%"
        };
      }
      return null;
    },
  },
};
</script>
<style scoped></style>

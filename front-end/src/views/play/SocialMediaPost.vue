<template>
  <div style="font-size: 120pt;">
    <div style="padding-left: 2.5%">
      "{{ content }}""
    </div>
    <div style="padding-left: 5%;">
      - {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    socialMediaPost: Object,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      if (this.socialMediaPost) {
        return this.socialMediaPost.content.user;
      }
      return "";
    },
    content() {
      if (this.socialMediaPost) {
        return this.socialMediaPost.content.content;
      }
      return "";
    }
  },
  methods: {},
};
</script>

<style scoped></style>

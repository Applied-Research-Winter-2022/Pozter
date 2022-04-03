<template>
  <!-- v container creates a grid system for sub components -->
  <v-container>
    <v-row>
      <!-- This V-col tag encompasses all sub components -->
      <v-col sm="12">
        <!-- This the header d-flex adds flexbox and justify-center is a flexbox attribute to center it-->
        <h2 class="d-flex justify-center" style="border: solid #cccccc">
          Success
        </h2>
        <p class="d-flex justify-center">
          Your billboard was created successfully. It can be viewed at:
        </p>
        <strong class="d-flex justify-center">
          <a :href="userBillboardUrl">{{ userBillboardUrl }}</a>
        </strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        To view a complete example with Social Media Posts that are hard-coded into the database:<br>
        <a :href="completeExampleUrl">{{ completeExampleUrl }}</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Step5Success",
  props: {},
  data() {
    return {
      userBillboardId: null,
    };
  },
  mounted() {
    this.userBillboardId = this.$route.query.userBillboardId;
    if (!this.userBillboardId) {
      this.$router.push("/");
    }
  },
  computed: {
    userBillboardUrl() {
      if (process.env.NODE_ENV === "production") {
        return "https://pozter-demo.herokuapp.com/play/" + this.userBillboardId;
      } else {
        return "http://localhost:8080/play/" + this.userBillboardId;
      }
    },
    completeExampleUrl() {
      if (process.env.NODE_ENV === "production") {
        return "https://pozter-demo.herokuapp.com/play/d12cb650-9f40-11ec-bbaa-6fe27c042acc";
      } else {
        return "http://localhost:8080/play/d12cb650-9f40-11ec-bbaa-6fe27c042acc";
      }
    },
  },
  methods: {},
};
</script>

<style scoped></style>

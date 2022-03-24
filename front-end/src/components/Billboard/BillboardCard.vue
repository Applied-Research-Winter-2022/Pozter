<template>
  <v-card :hover="true" @click="handleClick">
    <!-- components of this v-card -->
    <v-img :src="require('../../assets/canvas_1.jpg')" contain height="200px">
    </v-img>

    <v-card-title class="justify-center" v-text="billboardName"></v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Step1Billboard",
  props: {
    id: String,
    billboardName: String,
    venue: String,
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
      this.$router.push({
        path: "create/2", // go to the next page
        query: {
          billboardId: this.id, // send the id chosen by the user to the next page
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>billboard</h1>
    <p>{{ billboard }}</p>
    <h1>billboards</h1>
    <p>{{ billboards }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import DataService from "../../../service/dataService";

export default {
  name: "Step 1. Billboard",
  data() {
    return {
      billboard: {},
      billboards: [],
    };
  },
  async mounted() {
    await this.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");
    await this.fetchBillboards();
  },
  computed: {},
  methods: {
    async fetchBillboardId(id) {
      this.billboard = await DataService.fetchBillboardId(id);
    },
    async fetchBillboards() {
      this.billboards = await DataService.fetchBillboards();
    },
  },
};
</script>

<style scoped>
</style>
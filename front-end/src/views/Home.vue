<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>billboard</h1>
    <p>{{ billboard }}</p>
    <h1>billboards</h1>
    <p>{{ billboards }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DataService from "../../service/dataService";
export default {
  data() {
    return {
      billboard: {},
      billboards: [],
    };
  },
  name: "Home",
  components: {
    HelloWorld,
  },
  async mounted() {
    await this.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");
    this.billboards = await this.fetchBillboards();
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

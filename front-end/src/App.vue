<template>
  <div>
    <router-view v-if="isPlayer" />
    <v-app v-else>
      <navbar></navbar>
      <v-main class="grey lighten-3">
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",

  data: () => ({
    isPlayer: true,
  }),
  components: {
    Navbar,
  },
  created() {
    if (!this.$route.path.includes("/play")) {
      this.isPlayer = false;
    }
  },
};
</script>

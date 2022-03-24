<template>
  <div>
    <v-app>
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
    //
  }),
  components: {
    Navbar,
  },
};
</script>

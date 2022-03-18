<template>
  <v-app>
     <v-row>
      <v-col md="3">
        <nav-sidebar></nav-sidebar>
      </v-col>
      <v-col md="6">
        <v-main>
          <router-view />          
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import NavSidebar from "@/components/NavSidebar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components:{
    NavSidebar
  },
};
</script>

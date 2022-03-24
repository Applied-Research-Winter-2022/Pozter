<template>
  <div>
    <v-toolbar color="deep-orange lighten-1">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-avatar class="mr-5 ml-5" size="32" rounded>
        <img
          src="https://bit.ly/3IoVGU0"
          contain
          alt="Pozter"
          @click="returnHome"
          style="cursor: pointer"
        />
      </v-avatar>
      <v-toolbar-title>{{ currentRouteName }}</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense nav>
        <v-list-item-group active-class="indigo--text text--accent-4">
          <v-list-item v-for="link in links" :key="link">
            <v-list-item-icon>
              <v-icon>
                {{ link.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { title: "Home", icon: "mdi-home" },
      { title: "Account", icon: "mdi-account-multiple" },
      { title: "Campaigns", icon: "mdi-bullhorn" },
      { title: "Reports", icon: "mdi-clipboard-text" },
      { title: "Logout", icon: "mdi-logout" },
    ],
  }),
  methods: {
    returnHome() {
      this.$router.push("/");
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped></style>

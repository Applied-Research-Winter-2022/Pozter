<template>
  <div>
    <v-main>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6>
            <div class="text-xs-center">
              <router-link to="/create" tag="button">
                <v-btn  class="mx-auto" id="button-create" color="orange">
                  New Canvas
                </v-btn>
              </router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  name: "Home",
  props: {},
  data() {
    return {};
  },
  components:{
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>
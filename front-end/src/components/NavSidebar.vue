<template>
    <div>
        <v-card width="250px" height="100vh">
          <!-- This is the side-bar implemenatation -->
          <!-- <v-card> -->
            <v-navigation-drawer
            permanent
            left>
              <v-list-item>
              <!-- this list item content is the top of the side bar component -->
                <v-list-item-content>
                <!-- Title sub componenet of sidebar -->
                  <v-list-item-title class="text-h6">
                    Application
                  </v-list-item-title>
                  <!-- sub component -->
                  <v-list-item-subtitle>
                  subtext 
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <!-- This v-list item containts the actual side bar options  -->
              <!-- javascript in vue tags we loop option in sidebarOptions -->
              <!-- the key option.title is effectively a primary key it needs 
              to be there to access the elements of the array i.e. sidebarOptions -->
              <!-- The v-for and key makes the v-list item loop for however many
                items in the list  -->
              <v-list
                dense
                nav
                v-for="option in sidebarOptions"
                :key="option.title"
              >
                <!-- Below is where you would provide the items for the list -->
                <!--  -->
                
                <v-list-item link>
                  <v-list-item-icon>
                      <v-icon>
                      {{ option.icon }}
                      </v-icon>
                  </v-list-item-icon>

                    <v-list-item-title>
                    {{ option.title }}
                    </v-list-item-title>
                </v-list-item>
              </v-list>
              
            </v-navigation-drawer>
        </v-card> 
    </div>
</template>
<script>
export default {
  data(){
      return{
        sidebarOptions: [
          { title: "Home", icon: "mdi-folder" },
          { title: "Account", icon: "mdi-account-multiple" },
          { title: "Favorites", icon: "mdi-star" },
          { title: "Back", icon: "mdi-arrow-left" },
          { title: "Shared with me", icon: "mdi-account-multiple" },
          { title: "Starred", icon: "mdi-star" },
          { title: "My Files", icon: "mdi-folder" },
        ],
      }
  }
}
</script>
<style scoped></style>
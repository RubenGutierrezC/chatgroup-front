<template>
  <v-navigation-drawer
    v-model="drawer" app>

    <channels v-if="true"/>

    <channel v-else/>

    <template v-slot:append>

      <v-container>

        <v-list-item>
          <v-list-item-avatar>
            <v-img
              :alt="`${user.title} avatar`"
              :src="user.avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-capitalize" v-text="user.title"></v-list-item-title>
          </v-list-item-content>

          
          <v-menu
            open-on-hover
            top
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon dark v-bind="attrs"
                v-on="on">mdi-chevron-up</v-icon>
            </template>

            <v-list class="rounded-lg">
              <v-list-item>

                <v-list-item-content>
                    <v-btn text>
                      <v-icon left>mdi-account-circle</v-icon>
                      My Profile
                    </v-btn>
                </v-list-item-content>

              </v-list-item>

              <v-list-item>

                <v-list-item-content>
                    <v-btn text>
                      <v-icon left>mdi-image-filter-hdr</v-icon>
                      Tweeter
                    </v-btn>
                </v-list-item-content>

              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>

                <v-list-item-content>
                    <v-btn text color="accent">
                      <v-icon left>mdi-logout</v-icon>
                      Logout
                    </v-btn>
                </v-list-item-content>

              </v-list-item>


            </v-list>
          </v-menu>
        </v-list-item>

      </v-container>

    </template>

  </v-navigation-drawer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Channels from './Channels.vue'
  import Channel from './Channel.vue'

  export default Vue.extend({
    name: 'Navigation',

    components:{
      Channels,
      Channel
    },

    props: {
      drawer: null
    },

    data: () => ({
      user:{
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
      },
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),

  })

</script>

<style>

</style>

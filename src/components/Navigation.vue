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

          <v-icon dark>mdi-chevron-up</v-icon>
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
    }),

  })

</script>

<style>

</style>

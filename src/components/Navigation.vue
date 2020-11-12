<template>
  <v-navigation-drawer 
    v-model="drawer" app>

    <v-list rounded>

      <v-subheader>Channels</v-subheader>

      <v-list-item-group v-model="selectedItem" color="primary">

        <v-list-item v-for="(item, i) in items" :key="i">

          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list-item-group>

    </v-list>

  </v-navigation-drawer>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Navigation',

    props: {
      drawer: null
    },

    data: () => ({
        selectedItem: 1,
        items: [
            { text: 'Real-Time', icon: 'mdi-clock' },
            { text: 'Audience', icon: 'mdi-account' },
            { text: 'Conversions', icon: 'mdi-flag' },
        ],
    }),

  })

</script>

<style>

</style>

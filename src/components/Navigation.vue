<template>
  <v-navigation-drawer 
    v-model="drawer" app>

    <channels />

    <channel v-if="false"/>

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
    }),

  })

</script>

<style>

</style>

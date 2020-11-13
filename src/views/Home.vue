<template>
  <v-app id="inspire">

    <navigation :drawer="drawer"/>

    <messages />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator' // @ is an alias to /src
import Navigation from '../components/Navigation.vue'
import Messages from '../components/Messages.vue'

@Component({
  name: 'Home',
  components:{
    Navigation,
    Messages
  },

  data(){
    return {
      drawer: null
    }
  },

  created () {
    this.$vuetify.theme.dark = true
  },
})
export default class Home extends Vue {}
</script>

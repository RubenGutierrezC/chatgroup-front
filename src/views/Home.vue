<template>
  <v-app id="inspire">
    
    <navigation :drawer="drawer"/>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator' // @ is an alias to /src
import Navigation from '../components/Navigation.vue'

@Component({
  name: 'Home',
  components:{
    Navigation
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

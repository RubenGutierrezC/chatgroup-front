<template>
  <v-app>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Messages from '@/components/Messages.vue' // @ is an alias to /src

@Component({
  data: {

  },
  components: {
    Messages
  }
})
export default class Home extends Vue {}
</script>

<template>
    <Messages />
</template>

<script lang="ts">
import Vue from 'vue'
import Messages from '@/components/Messages.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'App',

  components: {
    Messages
  },

  data: () => ({
    //
  })
})
</script>

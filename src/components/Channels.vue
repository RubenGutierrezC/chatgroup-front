<template>
  <div>
    <v-subheader>
      <div class="text-h6">
          Channels
      </div>

      <v-spacer></v-spacer>

      <v-btn dark x-small class="button-x-small">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      
    </v-subheader>

    <v-container>
      <v-text-field
        solo
        class="rounded-lg textfield-message"
        label="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
    

      <v-list>

        <v-list-item-group v-model="selectedItem" color="primary" >
         
          <v-list-item v-for="(item, i) in items" :key="i" @click="$emit('change')">

            <v-list-item-avatar>
              <v-img
                
                :alt="`${item.title} avatar`"
                :src="item.avatar"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-uppercase" v-text="item.title"></v-list-item-title>
            </v-list-item-content>

          </v-list-item>

        </v-list-item-group>
        
      </v-list>

    </v-container>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Channels',

    data: () => ({
        selectedItem: 1,
        items: [
            {
              active: true,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: 'Jason Oner',
            },
            {
              active: true,
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              title: 'Mike Carlson',
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
              title: 'Cindy Baker',
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              title: 'Ali Connors',
            },
            
        ],
    }),

  })

</script>
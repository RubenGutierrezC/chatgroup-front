<template>
  <div>
        <v-subheader>
            <div class="text-h6">
              <v-btn text x-samll class="button-x-small">
                <v-icon dark>mdi-chevron-left</v-icon>
              </v-btn> Channels
            </div>
        </v-subheader>

        <v-container>

            <h6 class="text-h6">
              Name Channel
            </h6>

            <p class="text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem, a quos soluta maxime quam neque magni perferendis, facilis suscipit consequuntur.
            </p>

            <v-list>

                <v-list-item-group v-model="selectedItem" color="primary">

                    <div class="text-h6 text-uppercase">
                        Members
                    </div>

                    <v-list-item v-for="(item, i) in items" :key="i">

                        <v-list-item-avatar>
                            <v-img
                                :alt="`${item.title} avatar`"
                                :src="item.avatar"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
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
    name: 'Channel',

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

<style lang="sass">
  .button-x-small
    height: 32px !important
    width: 32px !important

</style>
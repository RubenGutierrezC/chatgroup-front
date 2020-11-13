<template>
  <div class="messages-container px-12">

    <v-app-bar app color="bgDark px-12">
      <v-toolbar-title>
        FRONT-END DEVELOPERS
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-list three-line color="bgDark">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title" class="list-content">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="list-content">
              <v-list-item-title>
                <span>
                  {{ item.userName }}
                </span>
                  {{ item.date }}
              </v-list-item-title>
              <v-list-item-subtitle
                class="list-content"
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-main>

    <v-footer app color="bgDark" height="72" inset class="px-12">
      <div></div>
      <v-text-field
        class="rounded-lg textfield-message"
        background-color="bgGrey"
        dense
        flat
        hide-details
        solo
        placeholder="Type a message here"
      >
      </v-text-field>
      <v-btn color="primary">
        >
      </v-btn>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'messages',
  data: () => ({
    items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday',
        message: 'perro momazo'
      },
      { divider: true, inset: true },
    ]
  })
});
</script>

<style lang="scss">
.messages-container {
  height: 100%;
  background-color: var(--v-bgDark-base);
}

</style>

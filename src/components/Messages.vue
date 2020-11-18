<template>
  <div class="messages-container px-12">

    <v-app-bar app color="bgDark px-12">
      <v-toolbar-title class="title">
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
          <v-list-item v-else :key="item.title" class="list-content">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="list-content">
              <v-list-item-title class="message-header">
                <h4 class="message-header__username">
                  {{item.userName}}
                </h4>
                  <span v-html="'&nbsp;&nbsp;&nbsp;</div>'"></span>
                <h5 class="message-header__date">
                  {{item.date}}
                </h5>



              </v-list-item-title>
              <v-list-item-subtitle
                class="message-text"
                v-text="item.message"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-main>

    <v-footer app color="bgDark" height="90" inset class="px-12 text-message">
      <v-text-field
        class="rounded-lg textfield-message"
        background-color="bgGrey"
        dense
        flat
        hide-details
        solo
        placeholder="Type a message here"
      >
        <template v-slot:append>
          <v-btn small color="primary" class="btn-send">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </template>
      </v-text-field>

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
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        userName: 'Denzel Barret',
        date: 'yesterday at 2:29 AM',
        message: 'perro momazo'
      }
    ]
  })
});
</script>

<style lang="scss">
.title {
  font-family: 'Noto Sans';
  font-weight: 500;
}

.messages-container {
  height: 100%;
  background-color: var(--v-bgDark-base);
}

.message-header {
  color: var(--v-customGrey-base);
  font-family: 'Noto Sans';
  &__username {
    display: inline-block;
    font-weight: 700;
  }
  &__date {
    display: inline-block;
    position: absolute;
    font-weight: 500;
  }
}

.message-text {
  color: var(--v-textMessage-base) !important;
  font-family: 'Noto Sans';
  font-weight: 500;
}
.text-message {
  .v-input__slot  {
    height: 52px;
  }
}

.btn-send {
  height: 40px !important;
  width: 40px !important;
}

</style>

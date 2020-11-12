<template>
  <v-app class="chat-container">
    <v-app-bar app color="#252329">
      <v-toolbar-title class="title-toolbar"
        >FRONT-END DEVELOPERS</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <!--  -->
      <v-list three-line class="list-container">
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
              <v-list-item-title class="list-content" v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle class="list-content"
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-main>

    <v-footer
      app
      color="transparent"
      height="72"
      inset
      class="footer-textfield"
    >
      <div></div>
      <v-text-field
        class="rounded-lg textfield-message"
        background-color="#3c393f"
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
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "messages",
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--white">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--white">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--white">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--white">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--white">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  })
});
</script>

<style lang="scss">
.chat-container {
  .v-application--wrap {
    background: #252329;
  }
}

.title-toolbar {
  color: #fff;
}

.list-container {
  background-color: #252329 !important;
}

  .list-content {
    color: #ffffff !important;
    span {
      color: #ffffff !important;
    }
  }

.text-white {
  color: #fff
}

.messages-container {
  overflow-y: auto;
}
.header {
  background-color: black;
  width: 100%;
  height: 64px;
}
.footer-textfield {
  background-color: green;
  padding: 0px 15px;
  .textfield-message {
    input {
      color: #fff !important;
    }
    input::placeholder {
      color: #828282 !important;
    }
  }
}
</style>

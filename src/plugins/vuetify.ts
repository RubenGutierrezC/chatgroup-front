import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        bgDark: '#252329',
        bgGrey: '#3c393f',
        customGrey: '#828282',
        textMessage: '#E0E0E0'
      }
    },
    options: {
      customProperties: true
    }
  }
})

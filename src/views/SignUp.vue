<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>

            <v-card class="elevation-12 pb-2">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="mdi-account-circle-outline" name="login" label="Email or username" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block>Login</v-btn>
              </v-card-actions>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>

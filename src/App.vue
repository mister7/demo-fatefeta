<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="0"
    >
      <div class="d-flex align-center">
        <v-img
          v-if="['xs'].includes($vuetify.breakpoint.name)"
          alt="fatefeta Logo"
          class="shrink mx-4"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
          dense=true
        />
        <v-img
          v-else
          alt="fatefeta Logo"
          class="shrink mx-4 mt-12"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="100"
          dense=true
        />

        <h2 v-if="!['xs'].includes($vuetify.breakpoint.name)" class="mr-2">fatefeta</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="loginStatus==='Not Login Yet'"
        target="_blank"
        text
      >
        <v-icon class="mr-2">mdi-shape-square-plus</v-icon>
        <span v-if="!['xs'].includes($vuetify.breakpoint.name)" class="mr-2">Sign Up</span>
      </v-btn>

      <v-btn
        v-else
        target="_blank"
        text
      >
        <span v-if="!['xs'].includes($vuetify.breakpoint.name)" class="mr-2">Logout</span>
        <v-icon class="ml-0">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Login/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    loginStatus: 'Not Login Yet',
  }),

  mounted () {
    console.log(this.$vuetify.breakpoint.name)
  },
};
</script>

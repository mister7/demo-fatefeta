<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="0"
      dense=true
    >
      <div class="d-flex align-center">
        <v-img
          v-if="['xs'].includes($vuetify.breakpoint.name)"
          class="shrink mx-4"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="30"
          dense=true
        />
        <v-img
          v-else
          alt="fatefeta Logo"
          class="shrink mx-4 mt-4"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="60"
          dense=true
        />

        <h2 v-if="!['xs'].includes($vuetify.breakpoint.name)" class="mr-2">{{title}}</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="$store.state.session===null"
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
        @click="logout"
      >
        <span
          v-if="!['xs'].includes($vuetify.breakpoint.name)"
          class="mr-2"
        >
            Logout
        </span>
        <v-icon class="ml-0">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    title: 'fatefeta'
  }),

  methods: {
    logout() {
      this.$store.commit('session_out')
      this.$router.push({name: 'Login'});
    }
  }
};
</script>

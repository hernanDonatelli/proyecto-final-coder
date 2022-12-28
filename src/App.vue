<template>
  <v-app>
    <navbar-component />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },

  data: () => {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped>

</style>

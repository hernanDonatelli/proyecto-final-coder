<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      right
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab to="/">
        Home
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab to="/shop">
        Productos
        <v-icon>mdi-store</v-icon>
      </v-tab>

      <v-tab to="/login">
        Ingresar
        <v-icon>mdi-lock-open-check-outline</v-icon>
      </v-tab>

      <v-tab to="/myCart">
        <span class="my-0">2</span>
        <v-icon>mdi-cart-variant</v-icon>
      </v-tab>
    </v-tabs>

  </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => {
    return {
      tab: null
    }
  },
};
</script>

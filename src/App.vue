<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs
        v-model="tab"
        background-color="amber darken-4"
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

        <v-tab to="/myCart" id="cartTab" class="flex-row-reverse brown darken-1">
          <span id="itemsCart" class="my-0 pl-2 font-weight-black">2</span>
          <v-icon id="cart" class="cart">mdi-cart-variant</v-icon>
        </v-tab>

        <user-component class="pr-5" />
      </v-tabs>


    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import UserComponent from "./components/UserComponent.vue";

export default {
  name: "App",
  components: {
    UserComponent,
  },

  data: () => {
    return {
      tab: null,
    };
  },
  methods: {

  },
};
</script>

<style scoped>
a.v-tab{
  font-family: Rubik;
  font-size: .75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active){
  color: rgba(255, 255, 255, 0.7);
}

.v-application #itemsCart{
  font-size: 1.2rem;
}
#cart.cart{
  font-size: 2rem;
}
</style>

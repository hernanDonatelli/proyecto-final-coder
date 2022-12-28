<template>
  <div>
    <v-app-bar color="brown darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase amber--text"
        ><span class="font-weight-light">Tienda</span
        ><span class="font-weight-black">Gourmet</span></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <div v-if="!$store.getters.getUserActive">
        <v-btn to="/login" small color="teal accent-3" class="mr-3"
          ><span class="black--text">Ingresar</span></v-btn
        >
        <v-btn to="/register" small color="grey darken-4"
          ><span class="white--text">Registrate</span></v-btn
        >
      </div>

      <user-component />
    </v-app-bar>

    <v-navigation-drawer v-if="this.getUserActive()" class="pt-10" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/shop">Productos</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cart-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/myCart">Cart</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-divider class="divider my-10" />

          <!-- Seccion Administradores -->
          <v-list-item v-if="this.getAdmin()">
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/shop">Admin Productos</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="this.getAdmin()">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/shop">Admin Usuarios</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="this.getAdmin()">
            <v-list-item-icon>
              <v-icon>mdi-truck-delivery</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/pedidos">Admin Pedidos</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import UserComponent from "./UserComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "NavbarComponent",
  components: {
    UserComponent,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    ...mapGetters(["getUserActive", "getAdmin"]),
  },
};
</script>

<style scoped>
.theme--light.v-navigation-drawer {
  background-color: #6d4c41;
}
.v-application a {
  font-family: Rubik;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffb300;
}
.v-list-item__icon i {
  color: #ffb300;
}
.v-application .deep-purple--text.text--accent-4 {
  color: #ffb300 !important;
  caret-color: #ffb300 !important;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #6d4c41;
}
.theme--light.v-navigation-drawer .divider {
  color: #ffb300;
  border-color: rgba(255, 179, 0, 0.4);
  width: 90%;
  margin: auto;
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col xs="10" sm="9" md="8" lg="6" class="mx-auto">
          <v-alert class="my-3 text-center"
            dense
            outlined
            type="error"
          >
            No tienes permisos para acceder a esta sección.
          </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="10" sm="9" md="8" lg="6" class="mx-auto">
        <h1 class="text-h4 text-uppercase text-center title mb-3">Login</h1>

        <v-divider class="mb-10 brown darken-1" />

        <login-component/>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "AccesoRestringidoView.vue",
  components: {
    LoginComponent,
  },
};
</script>

<style scoped>
.title {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
</style>
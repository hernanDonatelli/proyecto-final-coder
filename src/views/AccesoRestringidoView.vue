<template>
  <div>
    <v-col cols="10" sm="9" md="8" lg="5" class="mx-auto">
        <v-alert class="my-3 text-center"
          dense
          outlined
          type="error"
        >
          Debes estar <strong>logueado</strong> para agregar productos en el Carrito.
        </v-alert>
    </v-col>

    <login-component />
  </div>
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

</style>
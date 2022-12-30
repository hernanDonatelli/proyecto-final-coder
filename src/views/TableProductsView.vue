<template>
  <v-container>
    <h1 class="text-h4 text-uppercase text-center registrados-title my-3">
      <span>Nuestros</span>Productos
    </h1>

    <v-divider inset class="mb-10 mt-5 brown darken-1" />

    <table-products-component />

  </v-container>
</template>

<script>
import TableProductsComponent from "@/components/TableProductsComponent.vue";

export default {
  name: "TableUsersView",
  components: {
    TableProductsComponent,
  },
};
</script>

<style scoped>
.registrados-title,
.registrados-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.registrados-title span {
  font-weight: 200;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  width: 50%;
  margin: 1rem auto;
}
</style>
<template>
  <v-container class="products-view">
    <h1 class="text-h4 text-uppercase text-center registrados-title my-3">
      <span>Listado</span>Productos
    </h1>

    <v-divider class="brown darken-1" />

    <create-products-component />

    <table-products-component class="table-view" />


  </v-container>
</template>

<script>
import TableProductsComponent from "@/components/TableProductsComponent.vue";
import CreateProductsComponent from "@/components/CreateProductsComponent.vue";

export default {
  name: "TableUsersView",
  components: {
    TableProductsComponent,
    CreateProductsComponent
  }
};
</script>

<style scoped>
.products-view{
  padding-top: 5rem;
  position: relative;
}
.table-view{
  margin-top: -5rem;
}
hr{
  display: block;
  width: 15%;
  margin: 0 auto 1rem;
  border: 1.5px solid black;
}
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



</style>
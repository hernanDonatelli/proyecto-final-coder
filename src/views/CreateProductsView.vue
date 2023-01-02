<template>
    <v-container class="create-view">

        <h1 class="text-h4 text-uppercase text-center create-title mb-3">
              Crear Producto
            </h1>

            <v-divider class="brown darken-1" />

        <create-products-component />
    </v-container>
</template>

<script>
import CreateProductsComponent from '@/components/CreateProductsComponent.vue';

    export default {
        name: 'CreateProductsView',
        components: {
            CreateProductsComponent
        }
    }
</script>

<style scoped>
hr{
    display: block;
    width: 50%;
    margin: 0 auto;
}
.create-view{
    padding-top: 5.5rem;
}
.create-title,
.create-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.create-title span {
  font-weight: 200;
}
hr{
  display: block;
  width: 15%;
  margin: 0 auto;
  border: 1.5px solid black;
}
</style>
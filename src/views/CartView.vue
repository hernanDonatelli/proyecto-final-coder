<template>
  <v-container>
    <h1 class="text-h4 text-uppercase text-center cart-title my-3">
      <span>Mi</span>Carrito
    </h1>

    <v-divider class="mb-10 mt-5 brown darken-1" />

    <cart-component />

  </v-container>
</template>

<script>
import CartComponent from "@/components/CartComponent.vue";

export default {
  name: "CartView",
  components: {
    CartComponent,
  },
};
</script>

<style scoped>
.cart-title,
.cart-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.cart-title span {
  font-weight: 200;
}
</style>
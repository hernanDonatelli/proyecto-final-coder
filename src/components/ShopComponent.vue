<template>
  <div>
    <v-container>
      <v-row class="text-left mt-5">
        <v-col>
          <h1 class="shop-title"><span>Nuestros</span>Productos</h1>
        </v-col>
      </v-row>

      <v-divider class="mb-5 brown darken-1"></v-divider>

      <v-row>
        <v-col v-for="(producto, index) of getProducts" :key="index">
          <card-component :producto="producto" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardComponent from './CardComponent.vue';

export default {
  name: "ShopComponent",
  components: {
    CardComponent
  },
  created() {
    this.getProductsAPI();
  },
  methods: {
    ...mapActions(['getProductsAPI']),
  },
  computed: {
    ...mapGetters(['getProducts'])
  }
};
</script>

<style scoped>
.shop-title,
.shop-title span{
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6D4C41;
  font-weight: 600;
}
.shop-title span{
  font-weight: 200;
}
</style>
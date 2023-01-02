<template>
  <div>
      <v-row>
        <v-col v-for="(producto, index) of getProducts" :key="index">
          <card-component :producto="producto" />
        </v-col>
      </v-row>
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

</style>
<template>
  <v-container class="shopView">
      <v-row class="text-left mt-5">
        <v-col>
          <h1 class="shop-title text-center my-5"><span>Nuestros</span>Productos</h1>
        </v-col>
      </v-row>

      <v-divider class="mb-10 brown darken-1"></v-divider>
    <shop-component />
    </v-container>
</template>

<script>
import ShopComponent from "@/components/ShopComponent.vue";

export default {
  name: "ShopView",
  components: {
    ShopComponent,
  },
};
</script>

<style scoped>
#shop{
  background-color: #fafafa;
}
hr{
  display: block;
    width: 15%;
    margin: 0 auto;
    border: 1.5px solid black;
}
.shopView{
  padding-top: 56px;
}
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

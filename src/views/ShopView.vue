<template>
  <div id="shop" class="shopView">
    <shop-component />
  </div>
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
.shopView{
  margin-top: 56px;
}
</style>

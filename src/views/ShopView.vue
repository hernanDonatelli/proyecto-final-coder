<template>
  <div id="shop">
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
</style>

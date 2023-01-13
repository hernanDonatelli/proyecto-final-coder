<template>
  <div id="home">
    <v-fluid-container class="contenedor">
      <home-component />
    </v-fluid-container>
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "HomeView",

  components: {
    HomeComponent,
  },
};
</script>

<style scoped>
#home{
  height: 100vh;
  background-image: url(@/assets/hero.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.contenedor{
  height: 100%;
}
</style>
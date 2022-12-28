<template>
 <div id="home">
 </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: "HomeComponent",
  data() {
    return {

    }
  },
  created() {
    this.getUsersAPI();
  },
  methods: {
    ...mapMutations(["loadUsers"]),
    ...mapActions(["getUsersAPI"])
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
</style>
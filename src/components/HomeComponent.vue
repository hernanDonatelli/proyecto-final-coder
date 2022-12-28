<template>
 <div>
  <h1>Home</h1>
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
</style>
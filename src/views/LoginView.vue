<template>
  <v-container class="loginView">
    <v-row>
      <v-col xs="12" sm="10" md="8" lg="5" class="mx-auto mt-10">
        <h1 class="text-h4 text-uppercase text-center title mb-3">Login</h1>

        <v-divider class="mb-10 brown darken-1" />

        <login-component />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "LoginView.vue",
  components: {
    LoginComponent,
  },
};
</script>

<style scoped>
.loginView{
  margin-top: 56px;
}
.title {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
</style>
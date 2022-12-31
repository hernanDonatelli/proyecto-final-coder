<template>
  <v-container class="registerView">
    <v-row>
      <v-col xs="12" sm="10" lg="6" class="mx-auto mt-10">
        <h1 class="text-h4 text-uppercase text-center title mb-3">Registro</h1>

        <v-divider class="mb-10 brown darken-1" />

        <register-component />
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="10" lg="6" class="mx-auto">
        <div id="success" class="hidden">
          <v-alert
            prominent
            text
            type="success"
            icon="mdi-checkbox-marked-circle"
          >
            <v-row class="align-center">
              <v-col lg="9">
                El Registro ha sido exitoso! Ya puede ingresar al sistema.
              </v-col>
              <v-col lg="3">
                <v-btn depressed color="brown darken-1" to="/login">
                  Login
                </v-btn>
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegisterComponent from "@/components/RegisterComponent.vue";

export default {
  name: "RegisterView.vue",
  components: {
    RegisterComponent,
  },
};
</script>

<style scoped>
.registerView{
  margin-top: 56px;
}
.title {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
#success.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
}
#success.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}
</style>
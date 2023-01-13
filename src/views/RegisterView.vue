<template>
  <div id="registerView">
    <v-container class="registerView">
      <v-row class="d-flex align-center">
        <v-col class="col-10 col-sm-8 col-md-5 col-lg-6 col-xl-4 mx-auto mt-10 ma-md-0 pa-0 pa-md-0">
          <h1 class="text-h4 text-uppercase text-center title mb-3">Registro</h1>

          <v-divider class="mb-10 brown darken-1" />

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum voluptate provident asperiores at doloribus. Delectus quod sit quia ipsam architecto deserunt dolor optio libero a atque dignissimos, modi veniam.</p>
        </v-col>

        <v-col class="col-10 col-sm-8 col-md-6 col-lg-5 mx-auto">
          <register-component />
        </v-col>
      </v-row>
      <v-row class="px-0 mx-0">
        <v-col class="col-10 mx-auto px-0">
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
  </div>
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
#registerView{
  height: 100vh;
  background-color: #f7f7f7;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #f7f7f7 10px ), repeating-linear-gradient( #ffffff55, #ffffff );
}

.title {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
  padding-top: 5rem;
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
hr{
  display: block;
    width: 15%;
    margin: 0 auto;
    border: 1.5px solid black;
}

@media screen and (min-width: 959.98px){
  #registerView{
    padding-top: 7rem;
  }
  .title{
    padding: 0;
  }
}

@media screen and (min-width: 1259.98px){
  #registerView{
    padding-top: 5rem;
  }
}
</style>
<template>
  <v-container>
    <v-row>
      <v-col class="col-xs-12 col-sm-10 col-lg-6 mx-auto mt-10">
        <div class="d-flex justify-center align-center">
          <v-form ref="form" v-model="valid" lazy-validation>
            <h1 class="text-h4 text-uppercase text-center title mb-3">Login</h1>

            <v-divider class="mb-10 brown darken-1" />

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field class="mb-10"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="Mínimo 6 caracteres"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="checkUser"
            >
              Ingresar
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Limpiar Campos
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
              Limpiar Validación
            </v-btn>

            <p class="mt-5">
            No estás Registrado? Hazlo <a to="/register">aquí</a>
          </p>

          <div id="alert" class="hidden">
            <v-alert
            text
            type="error"
            icon="mdi-cloud-alert"
          >
            Debe completar los campos para el ingreso!
          </v-alert>
          </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: "LoginComponent",
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      nombre: "",
      emailRules: [
        (v) => !!v || "El e-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "El e-mail debe ser válido",
      ],
      show1: false,
      rules: {
        required: (value) => !!value || "Requerido",
        min: (v) => v.length >= 6 || "Min 6 caracteres",
      },
    };
  },
  created() {
    this.getUsersAPI();
  },
  methods: {
    ...mapMutations(['modifiedUserActive']),
    ...mapActions(['getUsersAPI']),

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    checkUser(){
      if(!this.email && !this.password){
        document.getElementById('alert').classList.remove('hidden');
        document.getElementById('alert').classList.add('visible');

        setTimeout(() => {
          document.getElementById('alert').classList.remove('visible');
          document.getElementById('alert').classList.add('hidden');
        }, 2500);
      }else{
        const userFinded = this.$store.state.usersRegistered.find(user => user.email == this.email && user.password == this.password);

        if(userFinded){
          //acceder al store y modificar userActive
          this.modifiedUserActive(userFinded.nombre);
          this.$router.push('/');
          // Object.assign(this.$data, this.$options.data());
        }
      }
    }
  },
};
</script>

<style scoped>
#alert.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
}
#alert.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}
h1.title{
  font-family: Rubik;
}
v-container{
  height: 100vh;
}
.title{
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6D4C41;
  font-weight: 600;
}
</style>
<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      class="mb-10"
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

    <v-row>
      <v-col cols="12">
        <v-btn
          block
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="checkUser"
        >
          Ingresar
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex align-center justify-center" cols="12">
        <p class="mt-5 mr-5">No estás Registrado?</p>
        <v-btn to="/register" text color="amber darken-4"> Hazlo AQUI </v-btn>
      </v-col>
    </v-row>

    <div id="alert" class="hidden">
      <v-alert text type="error" icon="mdi-cloud-alert">
        Debe completar los campos para el ingreso!
      </v-alert>
    </div>
  </v-form>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

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
    ...mapMutations(["modifiedUserActive", "modifiedUserStorage"]),
    ...mapActions(["getUsersAPI"]),
    ...mapGetters([
      "getUserActive",
      "getRegistered",
      "getUserStorage",
      "getItemsCart",
    ]),

    validate() {
      this.$refs.form.validate();
    },
    checkUser() {
      if (!this.email && !this.password) {
        document.getElementById("alert").classList.remove("hidden");
        document.getElementById("alert").classList.add("visible");

        setTimeout(() => {
          document.getElementById("alert").classList.remove("visible");
          document.getElementById("alert").classList.add("hidden");
        }, 2500);
      } else {
        const userFinded = this.getRegistered().find(
          (user) => user.email == this.email && user.password == this.password
        );

        if (userFinded) {
          const storagePrev = JSON.parse(localStorage.getItem("userLoged"));

          if (storagePrev == null) {
            localStorage.setItem("userLoged", JSON.stringify(userFinded));
            this.modifiedUserActive(userFinded);
            this.$router.push("/");
          } else {

            if (userFinded.email == storagePrev.email) {
              this.modifiedUserActive(JSON.parse(localStorage.getItem('userLoged')));
              this.$router.push("/");
            } else {
              localStorage.setItem("userLoged", JSON.stringify(userFinded));
              this.modifiedUserActive(userFinded);
              this.$router.push("/");
            }
          }
        } else {
          this.$router.push("/acceso-denegado");
        }
      }
    },
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
</style>
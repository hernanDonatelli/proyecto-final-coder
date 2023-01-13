<template>
  <div>
    <v-form id="loginForm" ref="form" v-model="valid" lazy-validation>
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
            color="teal accent-3"
            class="mr-4"
            @click="checkUser"
          >
            Ingresar
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-center justify-center" cols="12">
          <p class="mt-5 mr-5 text-body-2">No estás Registrado?</p>
          <router-link class="link-register" to="/register">
            <span class="goRegister">Hazlo Aqui</span>
          </router-link>
        </v-col>
      </v-row>
    </v-form>
    <div id="alert" class="hidden mt-3">
      <v-alert text type="error" icon="mdi-cloud-alert">
        <span class="text-caption">Debe completar los campos para el ingreso!</span>
      </v-alert>
    </div>
  </div>
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
        const userFinded = this.getRegistered.find(
          (user) => user.email == this.email && user.password == this.password
        );

        if (userFinded) {
          const storagePrev = JSON.parse(localStorage.getItem("userLoged"));

          if (!storagePrev) {
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
  computed: {
    ...mapGetters([
      "getUserActive",
      "getRegistered",
      "getUserStorage",
      "getItemsCart",
    ]),
  }
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
#loginForm{
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);;
}
.link-register{
  font-size: .9rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: rgba(0,0,0, .87);
  text-decoration: none;
  transition: color .2s ease-in-out;
}
.link-register:hover{
  color: #FF6F00;
}

@media screen and (min-width: 1259.98px){
  form#loginForm{
    margin-top: 5rem;
  }
}
</style>
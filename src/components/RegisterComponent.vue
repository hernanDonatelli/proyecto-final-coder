<template>
  <v-form id="registerForm" v-model="valid" lazy-validation>

    <v-text-field
      v-model="nombre"
      :counter="10"
      :rules="nombreRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="apellido"
      :counter="15"
      :rules="apellidoRules"
      label="Apellido"
      required
    ></v-text-field>

    <v-text-field
      v-model.trim="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="domicilio"
      label="Domicilio"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Contraseña"
      hint="Minimo 6 caracteres"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-radio-group v-model="admin" mandatory row>
      <v-radio label="Usuario" name="user" :value="false"></v-radio>
      <v-radio label="Administrador" name="admin" :value="true"></v-radio>
    </v-radio-group>

    <v-btn block color="success" class="mr-4" @click="postRegisterUser">
      Enviar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "RegisterComponent",
  data: () => ({
    valid: true,
    nombre: "",
    apellido: "",
    domicilio: "",
    email: "",
    password: "",
    admin: null,
    show1: false,
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 6 || "Min 6 caracteres",
    },
    nombreRules: [
      (v) => !!v || "Nombre es requerido",
      (v) =>
        (v && v.length <= 15) ||
        "El nombre debe contener menos de 15 caracteres",
    ],
    apellidoRules: [
      (v) => !!v || "Apellido es requerido",
      (v) =>
        (v && v.length <= 15) ||
        "El apellido debe contener menos de 15 caracteres",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    postRegisterUser(e) {
      e.preventDefault();
      const registerUser = {
        nombre: this.nombre,
        apellido: this.apellido,
        domicilio: this.domicilio,
        email: this.email,
        password: this.password,
        admin: this.admin,
      };

      const registerUserAPI = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerUser),
        };

        const postUser = await fetch(
          "https://639c6ec816d1763ab149a523.mockapi.io/usuarios",
          options
        );
        const response = await postUser.json();
        console.log(response);

        setTimeout(() => {
          this.clearForm();
        }, 1500);
      };
      registerUserAPI();
    },
    clearForm() {
      const form = document.getElementById("registerForm");

      if (form) {
        form.remove();
        document.getElementById("success").classList.remove("hidden");
        document.getElementById("success").classList.add("visible");
      }
    },
  },
};
</script>


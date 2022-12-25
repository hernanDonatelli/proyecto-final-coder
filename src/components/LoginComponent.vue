<template>
  <v-container>
    <v-row>
      <v-col class="col-xs-12 col-sm-10 col-lg-6 mx-auto">
        <v-form ref="form" v-model="valid" lazy-validation>
          <h1>Login</h1>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="Mínimo 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'Debes estar de acuerdo para continuar!']"
            label="Estoy de acuerdo"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Ingresar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Limpiar Campos
          </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Limpiar Validación
          </v-btn>
        </v-form>

        <p class="mt-5">
          No estás Registrado? Hazlo <a to="/register">aquí</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      checkbox: false,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
</style>
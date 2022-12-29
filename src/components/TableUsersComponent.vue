<template>
  <v-container>
    <h1 class="text-h4 text-uppercase text-center registrados-title my-3">
      <span>Usuarios</span>Registrados
    </h1>

    <v-divider inset class="mb-10 mt-5 brown darken-1" />

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Nombre</th>

            <th class="text-center">Apellido</th>

            <th class="text-center">Email</th>

            <th class="text-center">Admin</th>

            <th class="text-center">Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in getUsers()" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.admin ? "Si" : "No" }}</td>
            <td>{{ user.registrado }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

  <script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TableUsersComponent",
  data() {
    return {};
  },

  created() {
    this.getUsersAPI();
  },

  methods: {
    ...mapGetters(["getRegistered"]),
    ...mapActions(["getUsersAPI"]),

    getUsers() {
      return this.getRegistered();
    },
  },
};
</script>

  <style scoped>
tbody {
  text-align: center;
}
.registrados-title,
.registrados-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.registrados-title span {
  font-weight: 200;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  width: 50%;
  margin: 1rem auto;
}
</style>
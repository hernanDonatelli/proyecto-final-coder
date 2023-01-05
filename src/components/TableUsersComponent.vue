<template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Nombre</th>
            <th class="text-center">Apellido</th>
            <th class="text-center">Email</th>
            <th class="text-center">Domicilio</th>
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
            <td>{{ user.domicilio }}</td>
            <td>{{ user.admin ? "Si" : "No" }}</td>
            <td>{{ user.registrado }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

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

</style>
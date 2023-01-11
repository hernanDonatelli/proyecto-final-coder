<template>
  <div>
    <v-row class="mt-5">
      <v-col xs="12" lg="10" class="mx-auto">
        <v-simple-table class="text-center">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Id</th>
                <th class="text-center">Nombre</th>

                <th class="text-center">Apellido</th>

                <th class="text-center">Email</th>

                <th class="text-center">Password</th>

                <th class="text-center">Domicilio</th>

                <th class="text-center">Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ getUserActive.id }}</td>
                <td>{{ getUserActive.nombre }}</td>
                <td>{{ getUserActive.apellido }}</td>
                <td>{{ getUserActive.email }}</td>
                <td>{{ getUserActive.password }}</td>
                <td>{{ getUserActive.domicilio }}</td>
                <td>
                  <v-btn
                    @click="selectUser(getUserActive.id)"
                    :id="`btn-edit-${getUserActive.id}`"
                    class="ma-2"
                    text
                    icon
                    color="brown darken-1"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>

                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- Dialog para editar usuario -->
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span color="brown darken-1" class="text-h5 text-uppercase"
                  >Editar Usuario</span
                >
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="nombre"
                        label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                        v-model="apellido"
                        label="Apellido"
                        ></v-text-field>
                      </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="email"
                        label="email"
                        hint="dirección email valida, con @ y ."
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        v-model="password"
                        label="Password"
                        hint="Letras, numeros, signos, etc..."
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                        v-model="domicilio"
                        label="Domicilio"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn color="teal darken-3" text @click="putEditUser">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>

    <!-- Historial de pedidos cliente -->
    <h1 class="text-h4 text-uppercase text-center historial-title mt-15">
        <span>Historial</span>Pedidos
      </h1>

      <v-divider class="brown darken-1" />

    <v-row class="mt-5">
      <v-col xs="12" lg="10" class="mx-auto">
        <v-simple-table class="text-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id Pedido</th>
            <th class="text-center">Domicilio</th>
            <th class="text-center">Compra</th>
            <th class="text-center">Importe</th>
            <th class="text-center">Pagado</th>
            <th class="text-center">Enviado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pedido, index) in historialPedidos()" :key="index">
            <td>{{ pedido.id }}</td>
            <td>{{ pedido.domicilioCliente }}</td>
            <td>
                <ul>
                    <li class="d-flex justify-evenly" v-for="(producto, index) in pedido.userCart" :key="index">
                        <span>* {{ producto.nombre }} (x{{ producto.cantidad }})</span>
                    </li>
                </ul>
            </td>
            <td>{{ pedido.totalCompra }}</td>
            <td>{{ pedido.pagado ? 'Si' : 'No' }}</td>
            <td>{{ pedido.enviado ? 'Si' : 'No' }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from "vuex";

export default {
  name: "UserAccountComponent",
  data() {
    return {
        dialog: false,
        id: null,
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        domicilio: ""
    };
  },
  created() {
    this.getUsersAPI();
    this.getPedidosAPI();
  },
  methods: {
    ...mapActions(["getUsersAPI", "getUsersModified", "getPedidosAPI"]),

    selectUser(id) {
      this.dialog = true;
      const idSeleccionado = this.getRegistered.find((user) => user.id == id);

      this.id = idSeleccionado.id;
      this.nombre = idSeleccionado.nombre;
      this.apellido = idSeleccionado.apellido;
      this.email = idSeleccionado.email;
      this.password = idSeleccionado.password;
      this.domicilio = idSeleccionado.domicilio;
    },

    putEditUser() {
      const editedUser = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        password: this.password,
        domicilio: this.domicilio,
        userCart: this.getCartUserActive
      };

      //Enviar usuario editado a la API
      const editUserAPI = async () => {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedUser),
        };

        const putEditUser = await fetch(
          `https://639c6ec816d1763ab149a523.mockapi.io/usuarios/${this.id}`,
          options
        );
        const response = await putEditUser.json();
        console.log(response);

        this.getUsersModified();

        localStorage.setItem('userLoged', JSON.stringify(editedUser));

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        this.dialog = false;
      };

      editUserAPI();
    },

    historialPedidos(){
      const pedidosUser = this.getPedidosStore.filter(pedido => pedido.idCliente == this.getUserActive.id )

      return pedidosUser;
    }
  },
  computed: {
    ...mapGetters(["getUserActive", "getRegistered", "getPedidosStore", "getCartUserActive"]),
  },
};
</script>

<style scoped>
.historial-title,
.historial-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.historial-title span {
  font-weight: 200;
}
hr {
  display: block;
  width: 10%;
  margin: 1rem auto 0.5rem;
  border: 1.5px solid black;
}
</style>
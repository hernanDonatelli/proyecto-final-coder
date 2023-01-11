<template>
  <div>
    <v-simple-table dense fixed-header class="text-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id Pedido</th>
            <th class="text-center">Fecha</th>
            <th class="text-center">Cliente</th>
            <th class="text-center">Domicilio</th>
            <th class="text-center">Compra</th>
            <th class="text-center">Importe</th>
            <th class="text-center">Pagado</th>
            <th class="text-center">Enviado</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="pedido.enviado ? classEnviado : classNoEnviado" v-for="(pedido, index) in getPedidosStore()" :key="index">
            <td>{{ pedido.id }}</td>
            <td>{{ pedido.fechaPedido }}</td>
            <td>{{ pedido.nombreCliente }} {{ pedido.apellidoCliente }}</td>
            <td>{{ pedido.domicilioCliente }}</td>
            <td>
              <v-tooltip
                v-model="pedido.compra"
                top
                close-delay="250"
                color="brown accent-1"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="brown accent-1">
                      mdi-cart
                    </v-icon>
                  </v-btn>
                </template>
                <ol>
                    <li class="" v-for="(producto, index) in pedido.userCart" :key="index">
                        <span>* {{ producto.nombre }} (x{{ producto.cantidad }})</span>
                    </li>
                </ol>
              </v-tooltip>
            </td>
            <td>{{ pedido.totalCompra }}</td>
            <td :class="pedido.pagado ? 'aprobado' : 'pendiente'">
                <v-switch
                    v-model="pedido.pagado"
                    :disabled="pedido.enviado"
                    color="success"
                    @change="putPagadoState(pedido.id)"
                ></v-switch>
            </td>
            <td :class="pedido.enviado ? 'aprobado' : 'pendiente'">
                <v-switch
                    :disabled="!pedido.pagado"
                    v-model="pedido.enviado"
                    color="success"
                    @change="putEnviadoState(pedido.id)"
                ></v-switch>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PedidosComponent",
  data() {
    return {
      id: null,
      pagado: null,
      enviado: null,
      classEnviado: 'enviado',
      classNoEnviado: 'no-enviado'
    }
  },
  created() {
    this.getPedidosAPI();
  },
  methods: {
    ...mapActions(['getPedidosAPI']),
    ...mapGetters(["getPedidosStore"]),

    //Enviar estado pagado a la API
    async editarEstadoCompra(estado){
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(estado),
        };

        const putEditState = await fetch(
          `https://639c6ec816d1763ab149a523.mockapi.io/carts/${this.id}`,
          options
        );
        const response = await putEditState.json();

        this.getPedidosAPI();

        return response.enviado;

      },

    putPagadoState(id) {
      const idPedido = this.getPedidosStore().find((pedido) => pedido.id == id);

      this.id = idPedido.id;
      this.pagado = idPedido.pagado

      this.pagado ? !this.pagado : this.pagado;

      const editedPagado = {
        id: this.id,
        pagado: this.pagado
      };

      this.editarEstadoCompra(editedPagado);
    },

    putEnviadoState(id) {
      const idPedido = this.getPedidosStore().find((pedido) => pedido.id == id);

      this.id = idPedido.id;
      this.enviado = idPedido.enviado

      this.enviado ? !this.enviado : this.enviado;

      const editedEnviado = {
        id: this.id,
        enviado: this.enviado
      };

      this.editarEstadoCompra(editedEnviado);

    }
  },
};
</script>

<style scoped>
tbody tr:hover.enviado{
  background-color: #BCAAA4 !important;
}
tbody tr:hover{
  background-color: transparent !important;
}

.enviado{
    background-color: #BCAAA4;
    color: #8D6E63;
}
.no-enviado{
    background-color: white;
}
</style>
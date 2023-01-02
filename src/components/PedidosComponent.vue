<template>
  <div>
    <v-simple-table class="text-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id Pedido</th>
            <th class="text-center">Cliente</th>

            <th class="text-center">Compra</th>

            <th class="text-center">Importe</th>

            <th class="text-center">Pagado</th>

            <th class="text-center">Enviado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pedido, index) in getPedidos()" :key="index">
            <td>{{ pedido.id }}</td>
            <td>{{ pedido.nombreCliente }} {{ pedido.apellidoCliente }}</td>
            <td>
                <ul>
                    <li class="d-flex justify-evenly" v-for="(producto, index) in pedido.compra" :key="index">
                        <span>* {{ producto.nombre }} (x{{ producto.cantidad }})</span>
                    </li>
                </ul>
            </td>
            <td>{{ pedido.totalCompra }}</td>
            <td :class="pedido.pagado ? 'aprobado' : 'pendiente'">
                <v-switch
                    v-model="pedido.pagado"
                    :disabled="pedido.enviado"
                    color="success"
                ></v-switch>
            </td>
            <td :class="pedido.enviado ? 'aprobado' : 'pendiente'">
                <v-switch
                    :disabled="!pedido.pagado"
                    v-model="pedido.enviado"
                    color="success"
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
  created() {
    this.getPedidosAPI();
  },
  methods: {
    ...mapActions(['getPedidosAPI']),
    ...mapGetters(["getPedidosStore"]),

    getPedidos() {
      return this.getPedidosStore();
    }

  },
};
</script>

<style scoped>
.pedidoEntregado{
    background-color: pink;
}
</style>
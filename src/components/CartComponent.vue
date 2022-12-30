<template>
  <div>
    <v-simple-table class="text-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Producto</th>

            <th class="text-center">Cantidad</th>

            <th class="text-center">Valor Unitario</th>

            <th class="text-center">Total</th>

            <th class="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) of getItemsCart" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ producto.nombre }}</td>
            <td>
              <v-btn
                v-if="producto.cantidad > 0"
                @click="producto.cantidad--"
                fab
                small
                color="amber accent-2"
                class="mr-5"
              >
                <v-icon>mdi-cart-minus</v-icon>
              </v-btn>

              <input
                class="inputQuantity"
                readonly
                v-model.number="producto.cantidad"
              />

              <v-btn
                @click="producto.cantidad++"
                fab
                small
                color="amber accent-2"
                class="ml-5"
              >
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </td>
            <td>${{ producto.precio }}</td>

            <td>
              <strong
                >${{ (producto.precio * producto.cantidad).toFixed(2) }}</strong
              >
            </td>

            <td>
              <v-btn
                @click="deleteItem(producto.id)"
                :id="`btn-delete-${producto.id}`"
                class="ma-2"
                text
                icon
                color="red accent-3"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row v-if="subTotalCart() != 0" class="mt-3 pr-10">
      <v-col class="d-flex flex-column justify-end pa-2">
        <p class="text-right my-2">
          SubTotal: <strong>${{ subTotalCart() }}</strong>
        </p>

        <p class="text-right my-2">
          Total (+21% IVA): <strong>${{ (subTotalCart() * 1.21).toFixed(2) }}</strong>
        </p>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <p class="my-4 text-center">No tienes productos en el carrito.</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartComponent",
  methods: {
    subTotalCart() {
      const itemsInCart = this.getItemsCart.map((item) => item);

      const subTotal = itemsInCart
        .reduce(
          (total, producto) => (total += producto.precio * producto.cantidad),
          0
        )
        .toFixed(2);

      return subTotal;
    },

    deleteItem(id) {
      const itemToDelete = this.getItemsCart.find((item) => {
       return item.id == id;
      });
      let index = this.getItemsCart.indexOf(itemToDelete);

      this.getItemsCart.splice(index, 1);
    },
  },
  computed: {
    ...mapGetters(["getItemsCart"]),
  },
};
</script>

<style scoped>
.v-data-table {
  line-height: 4.5;
}
.inputQuantity {
  width: 30px;
  text-align: center;
}
</style>
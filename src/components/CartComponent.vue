<template>
  <v-container>
    <h1 class="text-h4 text-uppercase text-center cart-title my-3">
      <span>Mi</span>Carrito
    </h1>

    <v-divider inset class="mb-10 mt-5 brown darken-1" />

    <v-simple-table class="text-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Producto</th>

            <th class="text-center">Cantidad</th>

            <th class="text-center">Valor Unitario</th>

            <th class="text-center">Impuestos</th>

            <th class="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Leche de Almendras Original x 1l</td>
            <td>
              <v-btn fab small color="amber accent-2" class="mr-5">
                <v-icon>mdi-cart-arrow-down</v-icon>
              </v-btn>
              1
              <v-btn fab small color="amber accent-2" class="ml-5">
                <v-icon>mdi-cart-arrow-up</v-icon>
              </v-btn>
            </td>
            <td>$315.14</td>
            <td>21%</td>
            <td><strong>$381.32</strong></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Leche de Almendras Chocolatada x 1l</td>
            <td>
              <v-btn fab small color="amber accent-2" class="mr-5">
                <v-icon>mdi-cart-arrow-up</v-icon>
              </v-btn>
              <v-span>1</v-span>
              <v-btn fab small color="amber accent-2" class="ml-5">
                <v-icon>mdi-cart-arrow-down</v-icon>
              </v-btn>
            </td>
            <td>$327.55</td>
            <td>21%</td>
            <td><strong>$396.66</strong></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "CartComponent",
};
</script>

<style scoped>
.v-data-table {
  line-height: 4.5;
}
.cart-title,
.cart-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.cart-title span {
  font-weight: 200;
}
</style>
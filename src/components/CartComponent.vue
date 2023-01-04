<template>
  <div>
    <v-row v-if="getCartUserActive != 0" class="d-flex justify-end">
      <v-col cols="2">
        <v-btn
          @click="dialogEmpty = true"
          class="mb-0 mr-5 white--text"
          block
          color="red darken-2"
        >
          Vaciar Carrito
        </v-btn>

        <!-- Modal vaciar carrito -->
        <v-row justify="center">
          <v-dialog
            v-model="dialogEmpty"
            overlay-color="brown darken-4"
            max-width="600"
            width="unset"
          >
            <v-card>
              <v-card-title class="text-h5 buy-title">
                <span>Vaciar</span>Carrito?
              </v-card-title>

              <v-divider class="mb-5" inset></v-divider>

              <v-card-text>
                <p>
                  Clickeando en Aceptar el Carrito quedará vacío. Puedes ir al
                  listado de productos para comenzar nuevamente.
                </p>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red accent-2" text @click="dialogEmpty = false">
                  Cancelar
                </v-btn>

                <v-btn color="teal accent-4" text @click="emptyCartStore()">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
    <v-simple-table class="text-center mt-7">
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
          <tr v-for="(producto, index) of getCartUserActive" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ producto.nombre }}</td>
            <td>
                <v-icon
                v-if="producto.cantidad >= 1"
                @click="producto.cantidad--"
                color="brown darken-1" class="mr-5"
                >
                mdi-chevron-down
                </v-icon>

              <input
                class="inputQuantity"
                readonly
                v-model.number="producto.cantidad"
              />

              <v-icon
                @click="producto.cantidad++"
                color="brown darken-1" class="ml-5"
                >
                mdi-chevron-up
              </v-icon>

            </td>
            <td>${{ producto.precio }}</td>

            <td>
              <strong
                >${{ (producto.precio * producto.cantidad).toFixed(2) }}</strong
              >
            </td>

            <td>
              <v-tooltip left color="error">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="deleteItem(producto.id)"
                    :id="`btn-delete-${producto.id}`"
                    class="ma-2"
                    text
                    icon
                    color="red accent-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Vas a quitar este producto del carrito?</span>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row v-if="subTotalCart() != 0" class="mt-3 pr-10">
      <v-col class="d-flex justify-start align-center" cols="4">
        <v-icon id="store">mdi-arrow-left-bold-circle-outline</v-icon>
        <router-link class="ml-3" id="buyNext" to="/shop"
          >Seguir Comprando?</router-link
        >
      </v-col>

      <v-col cols="4" class="pt-7">
        <v-btn @click="dialog = true" class="mb-0" block color="teal accent-3">
          Procesar Compra
        </v-btn>

        <!-- Modal finalizar compra -->
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            overlay-color="brown darken-4"
            max-width="600"
            width="unset"
          >
            <v-card>
              <v-card-title class="text-h5 buy-title">
                <span>Finalizar</span>Compra?
              </v-card-title>

              <v-divider class="mb-5" inset></v-divider>

              <v-card-text>
                <p>
                  Aceptado este paso finalizará el proceso de compra y le
                  enviaremos un mail con la información para abonar el pedido.
                </p>
                <p>
                  El total de su compra es de
                  <strong>${{ (subTotalCart() * 1.21).toFixed(2) }}</strong>
                </p>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red accent-2" text @click="dialog = false">
                  Cancelar
                </v-btn>

                <v-btn color="teal accent-4" text @click="dialog = postBuy()">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>

      <v-col cols="4" class="d-flex flex-column justify-end pa-2">
        <p class="text-right my-2">
          SubTotal: <strong>${{ subTotalCart() }}</strong>
        </p>

        <p class="text-right my-2">
          Total (+21% IVA):
          <strong>${{ (subTotalCart() * 1.21).toFixed(2) }}</strong>
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
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CartComponent",
  data() {
    return {
      dialog: false,
      dialogEmpty: false,
    };
  },

  methods: {
    ...mapMutations(["emptyCartStore", "deleteItemMutation"]),

    subTotalCart() {
      const itemsInCart = this.getCartUserActive.map((item) => item);

      const subTotal = itemsInCart
        .reduce(
          (total, producto) => (total += producto.precio * producto.cantidad),
          0
        )
        .toFixed(2);

      return subTotal;
    },

    deleteItem(id) {
      const itemToDelete = this.getCartUserActive.find((item) => {
        return item.id == id;
      });
      let index = this.getCartUserActive.indexOf(itemToDelete);

      this.deleteItemMutation(index);

      localStorage.setItem('userLoged', JSON.stringify(this.getUserActive));

      console.log(this.getUserActive)

      this.$toasted.show("Producto Eliminado!!", {
        theme: "bubble",
        position: "top-center",
        duration: 1500,
        type: "error",
      });
    },



    postBuy() {
      const individualBuy = {
        idCliente: this.getUserActive.id,
        nombreCliente: this.getUserActive.nombre,
        apellidoCliente: this.getUserActive.apellido,
        totalCompra: (this.subTotalCart() * 1.21).toFixed(2),
        pagado: false,
        enviado: false,
        userCart: this.getCartUserActive
      };

      const upBuyAPI = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(individualBuy),
        };

        const postBuy = await fetch(
          "https://639c6ec816d1763ab149a523.mockapi.io/carts",
          options
        );
        const response = await postBuy.json();
        console.log(response);

        this.emptyCartStore();
        localStorage.setItem('userLoged', JSON.stringify(this.getUserActive));

        this.$toasted.show("La Compra ha sido exitosa!!", {
          theme: "bubble",
          position: "top-center",
          duration: 3000,
          type: "success",
        });
      };
      upBuyAPI();
    },
  },
  computed: {
    ...mapGetters(["getCartUserActive", "getUserActive"]),
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
#buyNext {
  text-decoration: none;
  color: #6d4c41;
  transition: all 0.2s ease-in-out;
}
#buyNext:hover {
  color: #ffab00;
}
#store {
  color: #6d4c41;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  width: 50%;
  margin-left: 3%;
}
.buy-title,
.buy-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.buy-title span {
  font-weight: 200;
}
</style>
<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Nombre</th>

            <th class="text-center">Marca</th>

            <th class="text-center">Categoria</th>

            <th class="text-center">Imagen</th>

            <th class="text-center">Stock</th>

            <th class="text-center">Precio</th>

            <th class="text-center">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in getProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.nombre }}</td>
            <td>{{ product.marca }}</td>
            <td>{{ product.categoria }}</td>
            <td>{{ product.img }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.precio }}</td>
            <td>
              <v-btn
                @click="selectProduct(product.id)"
                :id="`btn-edit-${product.id}`"
                class="ma-2"
                text
                icon
                color="brown darken-1"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-tooltip left color="error">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="idToDelete(product.id)"
                    :id="`btn-delete-${product.id}`"
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
                <span>Vas a ELIMINAR definitivamente este producto.</span>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <!-- Dialog para editar productos -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span color="brown darken-1" class="text-h5 text-uppercase"
              >Editar Producto</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="nombre" label="Nombre"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="marca" label="Marca"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="categoria"
                    label="Categoria"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="img" label="URL imagen"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="descripcion"
                    name="input-7-1"
                    label="Descripcion del producto"
                    hint="Letras, numeros, signos, etc..."
                  ></v-textarea>
                </v-col>

                <v-col cols="6">
                  <v-text-field v-model="stock" label="Stock"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="precio" label="Precio"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="putEditProduct">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Dialog para eliminar productos -->
    <v-row justify="center">
      <v-dialog v-model="delDialog" max-width="500">
        <v-card>
          <v-card-title class="text-h5">
            Desea eliminar este Producto?
          </v-card-title>

          <v-card-text>
            Esta acción no tiene vuelta atrás! Para generar un nuevo Producto
            deberá ir a la sección "Crear Producto".
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="brown darken-1" text @click="delDialog = false">
              Cancelar
            </v-btn>

            <v-btn color="red accent-3" text @click="deleteProduct">
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

  <script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TableProductsComponent",
  data() {
    return {
      dialog: false,
      delDialog: false,
      nombre: "",
      marca: "",
      img: "",
      precio: null,
      stock: null,
      categoria: "",
      id: null,
      descripcion: "",
    };
  },

  created() {
    this.getProductsAPI();
  },

  methods: {
    ...mapActions(["getProductsAPI"]),

    selectProduct(id) {
      this.dialog = true;
      const idSeleccionado = this.getProducts.find((item) => item.id == id);

      this.id = idSeleccionado.id;
      this.nombre = idSeleccionado.nombre;
      this.marca = idSeleccionado.marca;
      this.precio = idSeleccionado.precio;
      this.stock = idSeleccionado.stock;
      this.categoria = idSeleccionado.categoria;
      this.img = idSeleccionado.img;
      this.descripcion = idSeleccionado.descripcion;
    },

    putEditProduct() {
      const editedProduct = {
        id: this.id,
        nombre: this.nombre,
        marca: this.marca,
        precio: this.precio,
        stock: this.stock,
        categoria: this.categoria,
        img: this.img,
      };

      //Enviar producto editado a la API
      const editProductAPI = async () => {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        };

        const putEditProduct = await fetch(
          `https://639c6ec816d1763ab149a523.mockapi.io/productos/${this.id}`,
          options
        );
        const response = await putEditProduct.json();
        console.log(response);

        this.dialog = false;
      };

      editProductAPI();
    },

    idToDelete(id) {
      this.delDialog = true;
      const idSeleccionado = this.getProducts.find((item) => item.id == id);

      this.id = idSeleccionado.id;
    },

    deleteProduct(id) {
      id = this.id;

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const deleteProductAPI = async () => {
        const delProduct = await fetch(
          `https://639c6ec816d1763ab149a523.mockapi.io/productos/${id}`,
          options
        );
        const response = await delProduct.json();
        console.log(response);

        this.delDialog = false;
      };

      deleteProductAPI();
    },
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },
};
</script>

<style scoped>
  tbody {
    text-align: center;
  }
</style>
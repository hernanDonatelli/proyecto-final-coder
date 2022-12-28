<template>
  <div>
    <v-container>
      <v-row>
        <v-col xs="12" sm="10" lg="6" class="mx-auto mt-10">
          <v-form id="createProductForm" lazy-validation>
            <h1 class="text-h4 text-uppercase text-center create-title mb-3">
              Crear Producto
            </h1>

            <v-divider class="mb-10 brown darken-1" />

            <v-row>
              <v-col xs="12" sm="3" lg="4">
                <v-text-field
                  v-model="createNombre"
                  label="Nombre"
                ></v-text-field>
              </v-col>

              <v-col xs="12" sm="3" lg="4">
                <v-text-field
                  v-model="createMarca"
                  label="Marca"
                ></v-text-field>
              </v-col>
              <v-col xs="12" sm="3" lg="4">
                <v-text-field
                  v-model="createCategoria"
                  label="Categoria"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="createImg"
                  hint="Ej: https://dominio.com/imagen.jpg"
                  label="URL Imagen"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="createDescripcion"
                  name="input-7-1"
                  label="Descripcion del producto"
                  hint="Letras, numeros, signos, etc..."
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col xs="6">
                <v-text-field
                  v-model="createStock"
                  label="Stock"
                ></v-text-field>
              </v-col>
              <v-col xs="6">
                <v-text-field
                  v-model="createPrecio"
                  label="Precio"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-btn color="success" class="mr-4" @click="postCreateProduct">
              Enviar
            </v-btn>
          </v-form>
        </v-col>
      </v-row>

      <v-row>
        <v-col xs="12" sm="10" lg="6" class="mx-auto">
          <div id="createSuccess" class="hidden">
            <v-alert
              prominent
              text
              type="success"
              icon="mdi-checkbox-marked-circle"
            >
              <v-row class="align-center">
                <v-col lg="12">
                  El Producto ha sido creado exitosamente!
                </v-col>
              </v-row>
            </v-alert>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreateProductsComponent.vue",
  data() {
    return {
      createNombre: "",
      createMarca: "",
      createImg: "",
      createPrecio: null,
      createStock: null,
      createCategoria: "",
      createDescripcion: ""
    };
  },
  methods: {
    postCreateProduct() {
      const newProduct = {
        nombre: this.createNombre,
        marca: this.createMarca,
        img: this.createImg,
        precio: this.createPrecio,
        stock: this.createStock,
        categoria: this.createCategoria,
        descripcion: this.createDescripcion
      };

      const createProductAPI = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        };

        const postProduct = await fetch(
          "https://639c6ec816d1763ab149a523.mockapi.io/productos",
          options
        );
        const response = await postProduct.json();
        console.log(response);

        setTimeout(() => {
          const form = document.getElementById("createProductForm");

          if (form) {
            form.remove();
            document.getElementById("createSuccess").classList.remove("hidden");
            document.getElementById("createSuccess").classList.add("visible");
          }

          setTimeout(() => {
            this.$router.push("/admin-productos");
          }, 1500);
        }, 1500);
      };
      createProductAPI();
    },
  },
};
</script>

<style scoped>
.create-title,
.create-title span {
  letter-spacing: 0.001rem;
  font-family: Roboto;
  text-transform: uppercase;
  color: #6d4c41;
  font-weight: 600;
}
.create-title span {
  font-weight: 200;
}
#createSuccess.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
}
#createSuccess.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}
</style>
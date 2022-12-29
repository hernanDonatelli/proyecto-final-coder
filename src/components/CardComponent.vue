<template>
  <v-card class="mx-auto my-5" max-width="300" shaped>
    <v-img height="170" :src="producto.img"></v-img>

    <div class="d-flex justify-space-between align-center">
      <v-card-title>{{ producto.nombre }}</v-card-title>
      <v-icon class="heart">mdi-heart</v-icon>
    </div>

    <p class="price">${{ producto.precio }}</p>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="my-2 text-subtitle-1">
          {{ producto.marca }} • {{ producto.categoria }}
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn v-if="producto.stock == 0" depressed disabled> Sin Stock </v-btn>
      <v-btn
        @click="addToCart(producto.id)"
        :id="`btn-add-${producto.id}`"
        v-if="producto.stock > 0"
        color="amber accent-4"
        text
      >
        Agregar
      </v-btn>

      <v-btn text color="brown darken-1" @click="show = !show">
        +Info
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <!-- Mas Info -->
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="descripcion">
          {{ producto.descripcion }}
        </v-card-text>

        <p class="stock text-caption pl-4">
          Stock:
          <span>{{ producto.stock == 0 ? "Sin stock" : producto.stock }}</span>
        </p>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "cardComponent",
  data() {
    return {
      show: false,
    };
  },
  props: {
    producto: Object,
  },
  methods: {
    ...mapMutations(['addCartMutation', 'logOutUser']),

    addToCart(idProduct){
      const selectProduct = this.getProducts.find((item) => item.id == idProduct);

      if(this.getUserActive){
        this.addCartMutation(selectProduct);
      }else{
        this.$router.push('/acceso-denegado');
      }

    }
  },
  computed: {
    ...mapGetters(['getProducts', 'getUserActive'])
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500&family=Rubik:wght@300;400;500&display=swap");

.descripcion {
  font-family: Rubik;
}
.v-card__actions {
  justify-content: space-around;
}
.v-card__title {
  font-family: Oswald;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  color: rgb(109, 76, 65);
}
p.price {
  color: rgb(109, 76, 65);
  font-family: Oswald;
  font-weight: 500;
  font-size: 1.2rem;
  padding-left: 16px;
  margin: 0;
}
i.heart {
  width: 30px;
  height: 30px;
  font-size: 1.3rem;
  color: rgba(120, 144, 156, 0.8);
  cursor: pointer;
  margin-right: 1rem;
  transition: font-size 0.15s ease-in-out;
}

i.heart:hover {
  color: #ff6f00;
  font-size: 1.8rem;
}
</style>
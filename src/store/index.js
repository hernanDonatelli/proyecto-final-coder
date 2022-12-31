import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userActive: null,
    usersRegistered: [],
    productos: [],
    myCart: []
  },
  getters: {
    getUserActive(state){
      return state.userActive;
    },
    getProducts(state){
      return state.productos;
    },
    getAdmin(state){
      return state.userActive.admin;
    },
    getRegistered(state){
      return state.usersRegistered;
    },
    getItemsCart(state){
      return state.myCart;
    }
  },
  mutations: {
    modifiedUserActive(state, newUserState){
      state.userActive = newUserState;
    },
    logOutUser(state){
      state.userActive = null;
    },
    loadUsers(state, usersAPI){
      state.usersRegistered = usersAPI;
    },
    getProductsMutation(state, productsByApi){
      state.productos = productsByApi;
    },
    addCartMutation(state, newProductIn){
      state.myCart.push(newProductIn);
    },
    emptyCartStore(state){
      state.myCart = [];
    }
  },
  actions: {
    getUsersAPI: async ({commit}) =>{
      const usersAPI = await fetch('https://639c6ec816d1763ab149a523.mockapi.io/usuarios');
      const usersResponse = await usersAPI.json();

      commit('loadUsers', usersResponse);
    },
    getProductsAPI: async ({commit}) => {
      const productsAPI = await fetch('https://639c6ec816d1763ab149a523.mockapi.io/productos');
      const response = await productsAPI.json();

      commit('getProductsMutation', response);
    },

  }
})

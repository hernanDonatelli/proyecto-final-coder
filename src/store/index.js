import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userActive: null,
    usersRegistered: [],
    productos: []
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
    }
  },
  actions: {
    getUsersAPI: async ({commit}) =>{
      const usersAPI = await fetch('https://639c6ec816d1763ab149a523.mockapi.io/usuarios');
      const response = await usersAPI.json();
      const getUser = response.map(user => {
        return{
          email: user.email,
          nombre: user.nombre,
          apellido: user.apellido,
          password: user.password,
          admin: user.admin
        }
      });

      commit('loadUsers', getUser);
    },
    getProductsAPI: async ({commit}) => {
      const productsAPI = await fetch('https://639c6ec816d1763ab149a523.mockapi.io/productos');
      const response = await productsAPI.json();

      commit('getProductsMutation', response);
    },
  },
  modules: {
  }
})

<template>
    <div v-if="getUserActive()" class="d-flex align-center">
        <v-btn
        to="/myCart"
        class="mx-5"
        fab
        small
        color="amber accent-4"
        >
            <v-icon color="brown darken-1" dark>
                mdi-cart-variant
            </v-icon>
            <span>{{ getItemsCart().length }}</span>
        </v-btn>

        <p class="mb-0">Bienvenido, <span>{{ getUserActive().nombre }}</span></p>
        <v-btn
        @click="logOut"
        small
        class="mx-3"
        color="amber darken-1">
            Logout
        </v-btn>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: 'UserComponent',
        methods: {
            ...mapMutations(['logOutUser']),
            ...mapGetters(['getUserActive', 'getItemsCart']),

            logOut(){
                this.logOutUser();

                this.$router.push('/');
            }
        },
    }
</script>

<style scoped>
p{
    font-family: Rubik;
    font-size: .75rem;
    color: rgba(255, 255, 255, 0.6);
}
span{
    display: block;
    text-align: center;
    font-family: Rubik;
    font-size: .8rem;
    color: white;
}
.v-btn--fab.v-size--small{
    width: 45px;
    height: 45px;
}
.v-btn--fab.v-size--small span{
    color: #6D4C41;
    font-size: 1.2rem;
}
</style>
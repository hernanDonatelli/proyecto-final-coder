<template>
    <div v-if="$store.getters.getUserActive" class="d-flex align-center">
        <p class="mb-0">Bienvenido, <span>{{ $store.getters.getUserActive }}</span></p>
        <v-btn
        @click="logOut"
        class="mx-3"
        color="error">
            Salir
        </v-btn>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

    export default {
        name: 'UserComponent',
        methods: {
            ...mapMutations(['logOutUser']),

            logOut(){
                this.logOutUser();

                this.$router.push('/login');
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
</style>
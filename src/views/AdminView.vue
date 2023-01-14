<template>
    <div id="adminHome">
        <v-container fill-height>
            <v-row>
                <v-spacer></v-spacer>
                <v-col xs="10" md="3">
                    <v-card to="/admin-productos" shaped class="adminCard d-flex flex-column align-center justify-center">
                        <v-icon>mdi-store</v-icon>
                        <v-card-title class="pa-0">
                            Productos
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col xs="10" md="3">
                    <v-card to="/admin-usuarios" shaped class="adminCard d-flex flex-column align-center justify-center">
                        <v-icon>mdi-account-group</v-icon>
                        <v-card-title class="pa-0">
                            Usuarios
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col xs="10" md="3">
                    <v-card to="/admin-pedidos" shaped class="adminCard d-flex flex-column align-center justify-center">
                        <v-icon>mdi-truck-delivery</v-icon>
                        <v-card-title class="pa-0">
                            Pedidos
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'AdminView'
    }
</script>

<style scoped>
#adminHome {
  height: 100vh;
  background-image: url(@/assets/bg_admin.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.adminCard{
    height: 200px;
    background-color: transparent;
    border: 1px solid rgba(255, 179, 0, .5);
    transition: border-color .2s ease-in-out;
    color: rgba(255, 179, 0, .7);
}

.adminCard i{
    font-size: 6rem;
    color: rgba(255, 179, 0, .7);
}

.adminCard:hover i,
.adminCard:hover{
    color: #FFA000;
    border-color: #FFA000;
}
</style>
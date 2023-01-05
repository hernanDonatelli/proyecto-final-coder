<template>
    <v-container>
        <user-account-component />
    </v-container>
</template>

<script>
import UserAccountComponent from '@/components/UserAccountComponent.vue';

    export default {
        name: 'UserAccountView.vue',
        components: {
            UserAccountComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>
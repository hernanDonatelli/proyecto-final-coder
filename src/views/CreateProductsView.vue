<template>
    <div>
        <create-products-component />
    </div>
</template>

<script>
import CreateProductsComponent from '@/components/CreateProductsComponent.vue';

    export default {
        name: 'CreateProductsView',
        components: {
            CreateProductsComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>
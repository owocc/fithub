<script setup>
const id = useRoute().params.id
const { data } = await useFetch(`/api/shop/${id}`, {
    method: 'get'
})
</script>
<template>
    <ShopNavigation title="器材详情" back>
        <template #after>
            <UiButton desc="购物车" icon="i-ri-shopping-cart-2-line" @click="$router.push('/shop/cart')" square
                class="btn-square" gray />
        </template>
    </ShopNavigation>
    <div class="flex flex-col space-y-4">

        <!-- 商品详细卡片 -->
        <div class="w-full flex flex-col md:flex-row gap-4">
            <ImageCarousel :images="data.images" />
            <CardProductDetail :product="data" />
        </div>
        <div class=" w-full mx-auto flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-96">
                <CardProductInfo :detail="data.detail" />
            </div>
            <template v-if="data.productDetailId">
                <ImageList :images="data.detail.images" />
            </template>
        </div>
    </div>
    <UiScrollUp />
</template>
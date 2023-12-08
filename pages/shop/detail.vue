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
            <ImageCarousel />
            <CardProductDetail />
        </div>
        <div class=" w-full mx-auto flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-96">
                <CardProductInfo />
            </div>
            <ImageList />
        </div>
    </div>
</template>
<template>
    <ShopNavigation icon="i-ri-shopping-bag-line">
        <template #after>
            <UiButton desc="购物车" icon="i-ri-shopping-cart-2-line" @click="$router.push('/shop/cart')" square
                class="btn-square" gray />
        </template>
    </ShopNavigation>

    <div class="w-full mb-4 py-3 px-4 bg-first-gray/5 rounded-md">
        <input type="text" placeholder="搜索想要找的器材名称" class="bg-transparent outline-none w-full">
    </div>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <CardProduct />
    </div>
</template>
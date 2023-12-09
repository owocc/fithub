<script setup>

const name = ref('')

// ------- 数据获取 --------
const { data } = await useLazyAsyncData('productList', () => {
    return $fetch('/api/shop/list', {
        method: 'GET',
        query: {
            name: name.value
        }
    })
}, {
    default: () => ({
        list: [],
        total: 0
    }),
    watch: [name]
})


</script>
<template>
    <ShopNavigation icon="i-ri-shopping-bag-line">
        <template #after>
            <UiButton desc="购物车" icon="i-ri-shopping-cart-2-line" to="/shop/cart" square class="btn-square" gray />
        </template>
    </ShopNavigation>

    <div class="w-full mb-4 py-3 px-4 bg-first-gray/5 rounded-md">
        <input type="text" placeholder="搜索想要找的器材名称" class="bg-transparent outline-none w-full" v-model="name">
    </div>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <CardProduct v-for="product in data.list" :product="product" />
    </div>
</template>
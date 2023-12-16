<script setup>

const props = defineProps({
    product: {
        type: Object,
        default: () => ({
            name: '商品名称',
            description: '未获取到商品描述',
            price: "0"
        })
    }
})
const { formatPrice } = useUtils()

// 购物车
const cartStore = useCartStore()

</script>
<template>
    <div class="w-full flex-1 flex-col flex  gap-4 bg-first-gray-950 p-4 justify-between rounded-sm">
        <div class="flex flex-col gap-4">
            <h1 class="text-xl">{{ props.product.name }}</h1>
            <p class="text-first-gray-400">{{ props.product.description }}</p>
            <div>
                <UiBadge :label="props.product.category" />
            </div>

            <div class="flex gap-2 border p-2 rounded-sm bg-first-gray-900 border-first-gray-700 items-center">
                <span>价格:</span>
                <h1 class="text-3xl text-first">¥ {{ formatPrice(props.product.price) }}</h1>
            </div>

        </div>

        <div class="flex gap-4 flex-col lg:flex-row lg:justify-end">
            <UiButton label="加入购物车" icon="i-ri-shopping-cart-2-line" class="btn-primary w-full lg:w-auto" desc="快到车里来~"
                @click="cartStore.add(props.product)" />
        </div>
    </div>
</template>
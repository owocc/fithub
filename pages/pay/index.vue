<script setup>
// 购物车
const cartStore = useCartStore()
const { formatPrice } = useUtils()

const router = useRouter()
const submitOrder = () => {
    cartStore.clear()
    router.push('/')
}
</script>
<template>
    <ClientOnly>
        <div class="pt-20 lg:pt-28 px-6">
            <div class="flex flex-col justify-center items-center gap-y-8 bg-first-gray-950 w-full p-8">
                <div class="space-y-8 text-center">
                    <h1 class="text-2xl">支付</h1>
                    <h2 class="text-xl">共计人民币
                        <br />
                        <span class="text-first text-4xl">{{ formatPrice(cartStore.total) }} </span>
                        元
                    </h2>
                </div>

                <div class="flex gap-8">
                    <UiPrimaryLink white border label="取消支付" to="/shop/cart" />
                    <UiPrimaryLink primary border label="立即支付" @click="submitOrder" />
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
<script setup>
const props = defineProps({
    product: {
        type: Object,
        default: () => ({
            name: '商品名称',
            description: '暂未获取到商品信息',
            price: "0",
            images: [{
                url: '/img/home-img.png',
                alt: '商品图片'
            }],
            category: {
                name: '分类名称'
            }

        })
    }
})
const { limitText, formatPrice } = useUtils()
const { viewProduct } = useProduct()
</script>
<template>
    <div
        class="w-full h-full bg-first-gray/5 border-2 hover:border-first border-transparent transition-all cursor-pointer p-4 flex flex-col gap-y-4 rounded-md relative items-center overflow-hidden group">

        <UiBadge class="absolute -right-full top-6 inline-block transition-all group-hover:right-6"
            :label="props.product.category.name" />

        <!-- 商品图片 -->
        <img :src="props.product.images[0].url" class=" w-full h-full sm:max-h-80 rounded-sm object-contain aspect-square"
            :alt="props.product.images[0].alt">

        <!-- 商品名称和详情简述 -->
        <div class="w-full space-y-2">
            <b>{{ limitText(props.product.name, 20) }}</b>
            <p class="text-gray-500">{{ limitText(props.product.description, 30) }}</p>
        </div>

        <!-- 价格和操作 -->
        <div class="w-full bg-first-gray/5 p-2 flex rounded-md justify-between items-center">
            <b class="text-2xl text-first">¥ {{ formatPrice(props.product.price) }}</b>


        </div>

        <!-- 操作 -->
        <div class="w-full flex gap-4">
            <UiButton label="查看详情" class="h-12  w-full btn-secondary" icon="i-ri-eye-line"
                @click="viewProduct(props.product.id)" />
            <UiButton label="加入购物车" class="w-full btn-primary" icon="i-ri-shopping-cart-2-line" />
        </div>
    </div>
</template>
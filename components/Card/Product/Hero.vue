<script setup>
const props = defineProps({
    product: {
        type: Object,
        default: () => ({
            name: '最新商品',
            price: '0',
        })
    },
    index: {
        type: Number,
        default: 0
    }
})
const { infoMap } = useProduct()
const { formatPrice, limitText } = useUtils()

const icons = ['/img/pricing1.png', '/img/pricing2.png', '/img/pricing3.png']
</script>
<template>
    <article class="grid bg-first-gray bg-opacity-5 py-8 px-10 gap-y-8">
        <header>
            <div class="grid w-16 h-16 bg-first-gray rounded-full place-items-center mb-4">
                <img :src="icons[props.index]" alt="价格" class="w-9">
            </div>
            <h1 class="mb-4 text-base text-lg">{{ limitText(props.product.name, 25) }}</h1>
            <h2 class="text-3xl">¥ {{ formatPrice(props.product.price) }}</h2>
        </header>

        <ul class="grid gap-y-4">
            <li v-for="item in infoMap" :key="item.key" class="flex gap-2 items-center text-sm">
                <Icon name="ri:checkbox-circle-line" class="text-xl text-first" />
                {{ props.product.detail[item.key] }}
            </li>
        </ul>
        <UiPrimaryLink label="查看详情" white border block :to="`/shop/${props.product.id}`">
            <Icon name="ri:arrow-right-line" class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
        </UiPrimaryLink>
    </article>
</template>
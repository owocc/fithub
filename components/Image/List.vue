<script setup>
const props = defineProps({
    images: {
        type: Array,
        default: () => []
    }
})
</script>
<template>
    <!-- 商品图片 -->
    <div class="flex flex-col w-full flex-1 ">
        <div class="rounded-sm overflow-hidden">
            <img :src="image.url" :alt="image.alt" class="w-full" v-for="image in props.images" :key="image.id">
        </div>
        <p class="text-center pt-4  text-first-gray-500">🏋️ 还在犹豫什么,快把我加入购物车吧~</p>
    </div>
</template>
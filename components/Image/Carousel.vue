<script setup>
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps({
    images: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <Swiper :slides-per-view="1" :space-between="50" loop
        class="p-4 md:h-96 w-full flex rounded-sm items-center justify-center md:max-w-sm bg-first-gray-950">
        <SwiperSlide class="w-full h-full" v-for="image in props.images" :key="image.id">
            <img :src="image.url" class="w-full object-cover aspect-square">
        </SwiperSlide>
    </Swiper>
</template>
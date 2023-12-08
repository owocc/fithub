<script setup>
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
const images = ref([
    "/test/t-1.jpg",
    "/test/t-2.jpg",
    "/test/t-3.jpg",
    "/test/t-4.jpg",
])
</script>

<template>
    <Swiper :slides-per-view="1" :space-between="50" loop
        class="p-4 w-full flex rounded-sm items-center justify-center md:max-w-sm bg-first-gray-950">
        <SwiperSlide class="w-full h-full" v-for="item in images">
            <img :src="item" class="w-full object-cover aspect-square">
        </SwiperSlide>
    </Swiper>
</template>
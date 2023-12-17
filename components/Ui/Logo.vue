<script setup>
import { clsx } from 'clsx'
const props = defineProps({
    size: {
        type: String,
        default: 'md'
    }
})

const logoClasses = computed(() => clsx(
    'text-title flex items-center gap-x-2 font-bold',
    props.size === 'sm' && 'text-lg',
    props.size === 'md' && 'text-2xl md:text-2xl',
    props.size === 'lg' && 'text-4xl'
))
const imageClasses = computed(() => clsx(
    props.size === 'sm' && 'w-4',
    props.size === 'md' && 'w-5',
    props.size === 'lg' && 'w-8'
))
</script>
<template>
    <NuxtLink to="/" :class="logoClasses">
        <img src="/img/logo-nav.png" alt="FitHub Logo" :class="imageClasses">
        FitHub
    </NuxtLink>
</template>
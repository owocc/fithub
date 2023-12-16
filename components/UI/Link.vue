<script setup>
import { clsx } from 'clsx'
const props = defineProps({
    tooltip: {
        type: String,
        default: ''
    }
})

const classes = computed(() => clsx(
    'flex items-center',
    props.tooltip && 'lg:tooltip lg:tooltip-bottom'
))
</script>
<template>
    <NuxtLink v-bind="$attrs" active-class="text-first" class="hover:text-first transition-all duration-300 cursor-pointer">
        <div :class="classes" :data-tip="props.tooltip">
            <slot />
            <span class="lg:hidden">{{ props.tooltip }}</span>
        </div>
    </NuxtLink>
</template>
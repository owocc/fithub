<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Badge'
    }
    
})
</script>
<template>
    <span class="border text-sm py-1 px-2 rounded-full border-first-gray-700 hover:bg-first-gray-800 bg-first-gray-900">{{
        props.label }}</span>
</template>
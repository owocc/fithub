<script setup>
const props = defineProps(['label', 'value'])
</script>

<template>
    <div class="flex flex-col items-center gap-2">
        <span class="font-bold text-first">{{ props.value }}</span>
        <span>{{ props.label }}</span>
    </div>
</template>
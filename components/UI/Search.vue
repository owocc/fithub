<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
<template>
    <input
        class=" mb-4 py-3 px-4 bg-first-gray/5 outline-offset-1 w-full focus:outline focus:outline-primary focus:outline-2"
        :value="props.modelValue" @input="(e) => emit('update:modelValue', e.target.value)">
</template>
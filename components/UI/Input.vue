<script setup>
const props = defineProps(['modelValue', 'label'])
defineEmits(['update:modelValue'])
</script>
<template>
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-first-gray-500">{{ props.label }}</label>
        <input v-bind="$attrs" @input="(e) => $emit('update:modelValue', e.target.value)"
        :value="props.modelValue"
            class="w-full px-3 py-2 border-2 border-transparent focus:outline-none focus:border-first" />
    </div>
</template>
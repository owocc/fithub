<!-- 对按钮进行简单的封装 -->
<script setup>
import clsx from 'clsx';

const props = defineProps({
    label: {
        type: String,
    },
    icon: {
        type: String,
    },
    desc: {
        type: String,
    },
    tooltipDirection: {
        type: String,
        default: 'top',
    },
    gray: {
        type: Boolean,
        default: false
    }
})




const toolTipClasses = computed(() => clsx(
    props.desc && 'lg:tooltip before:z-50 after:z-50',
    props.tooltipDirection === 'left' && 'lg:tooltip-left',
    props.tooltipDirection === 'right' && 'lg:tooltip-right',
    props.tooltipDirection === 'top' && 'lg:tooltip-top',
    props.tooltipDirection === 'bottom' && 'lg:tooltip-bottom',
))

const btnClasses = computed(() => clsx(
    'btn border-none  rounded-full flex items-center justify-center  transition-all',
    props.gray && 'bg-first-gray-950 hover:bg-first-gray-900',
))

</script>
<template>
    <div :class="toolTipClasses" :data-tip="props.desc">
        <button v-bind="$attrs" :class="btnClasses">
            <Icon v-if="props.icon" :name="props.icon" class="text-xl" />
            <span v-if="props.label">{{ label }}</span>
        </button>
    </div>
</template>
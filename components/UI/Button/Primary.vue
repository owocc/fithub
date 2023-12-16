<script setup>
import clsx from 'clsx';
// 定义porps
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  white: {
    type: Boolean,
    default: false
  },
  primary: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
});

// 按钮样式
const linkClasses = clsx(
  'text-title-black font-bold py-4 px-6 cursor-pointer transition-colors duration-300 hover:bg-first-light inline-flex justify-center items-center gap-x-2 group',
  props.class,
  props.white && 'bg-title',
  props.primary && 'bg-first',
  props.border && 'border-2 border-first-light',
  props.block && 'w-full'
)

const emit = defineEmits(['click'])
const handlerClick = () => {
  const router = useRouter()
  // 如果有to属性，就跳转到to属性的页面
  if (props.to) {
    router.push(props.to)
    return
  }
  // 如果没有to属性，就触发click事件
  emit('click')
}

</script>


<template>
  <button :class="linkClasses" @click="handlerClick">
    {{ props.label }}
    <slot />
  </button>
</template>


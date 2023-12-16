
<script setup>
import clsx from 'clsx'
// 注入 editor,在它的上一层要进行 v-if 判断
const editor = inject('editor')
const props = defineProps(['menuItem'])

// 点击事件
const handlerClick = () => {
  const clickCallback = props.menuItem?.handlerClick
  if (!(typeof clickCallback === 'function')) {
    return
  }
  clickCallback(editor.value)
}

const isActive = ref(false)
const handlerIsActive = () => {
  const activeParams = props.menuItem?.activeParams
  if (activeParams && Array.isArray(activeParams)) {
    return editor.value.isActive(activeParams[0], activeParams[1])
  } else {
    return activeParams ? editor.value.isActive(activeParams) : false
  }
}

const activeClasses = computed(() => {
  return clsx(
    'border border-transparent hover:bg-first-gray-700 p-2 flex items-center justify-center rounded-sm',
    isActive.value &&
    'bg-first-gray-700 '
  )
})

// 监测是否被选中,然后对样式进行改变
watch(handlerIsActive, (newValue) => {
  isActive.value = newValue
})
</script>

<template>
  <div class="tooltip" :data-tip="props.menuItem.text">
    <button @click="handlerClick" :class="activeClasses">
      <Icon :name="props?.menuItem?.icon" />
    </button>
  </div>
</template>

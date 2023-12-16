<script setup lang="ts">
import clsx from 'clsx'

//菜单在手机端时的显示状态
const menuVisible = ref(false)
const handlerSwitch = (state: boolean) => {
  menuVisible.value = state
}

// 为滚动时切换顶部栏背景色
const { state } = useScroll(30)
const headerClasses = computed(() => clsx(
  'w-full fixed top-0 left-0 z-50 transition-all px-6 bg-base-body shadow-md',
))

</script>

<template>
  <header :class="headerClasses">
    <nav class="max-w-6xl mx-auto h-nav flex justify-between items-center lg:h-[calc(var(--header-height)+2rem)]">
      <!-- LOGO -->
      <UiLogo />
      <!-- 菜单按钮 -->
      <LayoutHeaderMenuList :visible="menuVisible" @close="handlerSwitch(false)" />
      <div class="text-xl cursor-pointer lg:hidden" @click="handlerSwitch(true)">
        <Icon name="ri:menu-fill" />
      </div>
    </nav>
  </header>
</template>

<template>
  <header :class="headerClasses">
    <nav class="max-w-6xl w-full h-nav flex justify-between items-center px-6">
      <!-- LOGO -->
      <NuxtLink to="/" class="text-title flex items-center gap-x-2 font-bold">
        <img src="/img/logo-nav.png" alt="FitHub Logo" class="w-5">
        FitHub
      </NuxtLink>
      <!-- 菜单按钮 -->
      <LayoutClientHeaderMenuList :visible="menuVisible" @close="handlerSwitch(false)"/>
      <div class="text-xl cursor-pointer" @click="handlerSwitch(true)">
        <Icon name="ri:menu-fill"/>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import clsx from 'clsx'
import {gsap} from 'gsap'
import {Observer} from 'gsap/Observer'
gsap.registerPlugin(Observer)
const menuVisible = ref(false)
const handlerSwitch = (state: boolean) => {
  menuVisible.value = state
}

const showBg = ref(false)
const headerClasses = computed(()=>clsx(
  'w-full fixed top-0 left-0 z-50 transition ease-in-out duration-500',
  showBg.value && 'bg-base-body shadow-md'
))

// 为客户端添加滚动时切换背景色
onMounted(async ()=>{
  await nextTick(()=>{
    Observer.create({
      target:window,
      type:'scroll',
      onChangeY:(e)=>{
        showBg.value = e.scrollY() >= 50
        console.log(showBg.value)
      }
    })
  })
})
</script>

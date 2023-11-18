<template>
  <!--  Home-->
  <section class="pt-32 relative flex justify-center px-6">
    <div class="grid justify-center items-center md:grid-cols-2 lg:grid-cols-[repeat(2,max-content)]  justify-items-center gap-y-20">
      <div class="z-10 relative flex flex-col text-center md:text-left">
        <h2
          class="font-mono text-2xl font-black text-stroke text-stroke-white text-transparent tracking-wider md:text-4xl">
          FitHub
        </h2>
        <h1 class="text-4xl font-black my-2 tracking-wider md:text-5xl">全方面了解你的身体</h1>
        <p class="mb-10 max-w-md">In here we will help you to shape and build your ideal body and live your life to the dhjaksjdaksjdkjakdjk djsakjdkasjdk
          fullest
        </p>

        <CommonUiPrimaryLink label="开始使用" class="md:max-w-xs" to="/" primary border>
          <Icon name="ri:arrow-right-line" class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
        </CommonUiPrimaryLink>
      </div>
      <!--home images-->

      <div class="px-6">
        <img src="/img/choose-img.png" alt="" class="relative w-[305px]  mx-auto z-10 md:w-[450px]">
        <div
          class="triangle absolute right-0  bottom-0 bg-first-dark h-[325px] w-[305px]  md:w-[650px] md:h-[450px] lg:h-[650px]" />
        <div
          class="triangle absolute right-0  bottom-0 bg-first-alt h-[325px] w-[205px]  md:w-[550px] md:h-[450px] lg:h-[650px]" />
        <div
          class="triangle absolute right-0  bottom-0 bg-first h-[325px] w-[105px]  md:w-[450px] md:h-[450px] lg:h-[650px]" />
        <!-- <img src="/img/home-img.png" alt="主页图片" class="block relative z-10  w-[350px] md:w-[750px] mx-auto">
        <div class="triangle absolute right-0 bottom-0 bg-first-dark h-96 w-80" />
        <div class="triangle absolute right-0 bottom-0 bg-first-alt h-96 w-52" />
        <div class="triangle absolute right-0 bottom-0 bg-first h-96 w-28" /> -->

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import clsx from 'clsx'

const homeContainerClasses = clsx(
  // 'px-6 text-center h-full relative grid pt-16 w-full gap-y-12  md:grid-cols-[repeat(2,max-content)] md:items-center md:text-left md:h-full lg:pt-28 md:gap-x-8'
  // 'flex flex-col items-center justify-center'
)

</script>


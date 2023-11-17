<template>
  <!--  Home-->
  <section class="max-w-6xl relative pt-16">
    <!--    home__container-->
    <div class="relative px-6 grid w-full pt-16 gap-y-12">
      <!--      home-data-->
      <div class="text-center">
        <h2 class="text-2xl text-stroke text-stroke-white text-transparent tracking-wider">MAKE YOUR</h2>
        <h1 class="text-4xl font-black my-2 tracking-wider">BODY SHAPE</h1>
        <p class="mb-10">In here we will help you to shape and build your ideal body and live your life to the
          fullest</p>

        <CommonUiPrimaryLink label="开始使用" to="/" primary border>
          <Icon name="ri:arrow-right-line" class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
        </CommonUiPrimaryLink>
      </div>
      <!--home images-->
      <div>
        <img src="/img/home-img.png" alt="主页图片" class="block relative z-10 w-80 mx-auto">

        <div class="triangle absolute right-0 triangle bottom-0 bg-first-dark h-[325px] w-[305px]" />
        <div class="triangle absolute right-0 triangle bottom-0 bg-first-alt h-[325px] w-[205px]" />
        <div class="triangle absolute right-0 triangle bottom-0 bg-first h-[325px] w-[105px]" />

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>


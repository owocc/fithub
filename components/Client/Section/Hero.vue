
import type clsx from 'clsx';
<template>
    <!--  Home-->
    <section class="pt-32 relative flex justify-center px-6 mb-32">
        <div
            class="grid justify-center items-center md:grid-cols-2 lg:grid-cols-[repeat(2,max-content)]  justify-items-center gap-y-20">
            <div class="z-10 relative flex flex-col text-center md:text-left">
                <h1 class="text-4xl font-black my-2 tracking-wider md:text-5xl">健身没有捷径
                    <br class=" lg:hidden" />
                    但有方法
                </h1>
                <p class="mb-10 max-w-md">提供实用、有效且富有趣味的科学健身知识的平台，致力于助您形成科学的健身理念
                </p>

                <CommonUiPrimaryLink label="健身百科" class="md:max-w-xs" to="/" primary border>
                    <Icon name="ri:arrow-right-line"
                        class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
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
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import clsx from 'clsx'
const heroSelectionClasses = clsx(

)

</script>
  
  
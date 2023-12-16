
<template>
    <div class="fixed top-5  w-full px-5 flex justify-center lg:justify-start z-[50] lg:opacity-50 
    lg:hover:opacity-100 transition-all">
        <UiLogo />
    </div>
    <div class="flex justify-center items-center h-screen">
        <!-- 图片区域 -->
        <div class="w-1/2 h-screen hidden lg:block opacity-50 ">
            <img src="/img/bg.jpg" alt="Placeholder Image" class="object-cover w-full h-full" />
        </div>

        <!-- 右侧表单 -->
        <div
            class="lg:p-36 md:p-52 sm:20 p-8 w-full h-full lg:w-1/2 relative flex pt-32 lg:pt-0 lg:items-center lg:justify-center">
            <div class="w-full flex flex-col">
                <slot />
            </div>
        </div>
    </div>
</template>
  
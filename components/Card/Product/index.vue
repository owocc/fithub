<template>
    <div class="w-full bg-first-gray/5 border-2 hover:border-first border-transparent transition-all cursor-pointer p-4 flex flex-col gap-y-4 rounded-md "
        @click="$router.push('/shop/detail')">

        <img src="/img/home-img.png" class="w-full object-contain " alt="">
        <div class="h-20 ">
            <b>商品名称</b>
            <p class="text-gray-500">商品描述商品描述商品描述商品描述商品描述</p>
        </div>
        <!-- 商品属性 -->
        <div class="flex gap-x-2">
            <span
                class="border text-sm py-1 px-2 rounded-full border-first-gray/10 hover:bg-first-gray/20 bg-first-gray/5">小米</span>
            <span
                class="border text-sm py-1 px-2 rounded-full border-first-gray/10 hover:bg-first-gray/20 bg-first-gray/5">小米</span>
            <span
                class="border text-sm py-1 px-2 rounded-full border-first-gray/10 hover:bg-first-gray/20 bg-first-gray/5">小米</span>
            <span
                class="border text-sm py-1 px-2 rounded-full border-first-gray/10 hover:bg-first-gray/20 bg-first-gray/5">小米</span>
        </div>
        <div class="w-full bg-first-gray/5 p-2 flex rounded-md justify-between items-center">
            <div>
                <b class="text-2xl text-first">¥ 999</b>
            </div>
            <button
                class="h-10 px-4 bg-first-gray/5 rounded-full flex gap-x-2 items-center justify-center  hover:bg-first-gray/10 transition-all text-sm">
                <Icon name="i-ri-shopping-cart-2-line" class="text-lg" />
                <span>加入购入车</span>
            </button>
        </div>
    </div>
</template>
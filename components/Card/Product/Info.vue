<template>
    <div class="bg-first-gray-950 p-4 space-y-4 rounded-sm">
        <div class="text-center">
            <h2>商品信息</h2>
        </div>
        <div class="rounded-sm p-4 grid grid-cols-2 text-center gap-4 ">
            <section class="flex flex-col rounded-full hover:bg-first-gray-900 transition-all p-2 " v-for="item in 4">
                <b class="text-first-gray-400 ">品牌</b>
                <span class="text-lg">李宁</span>
            </section>
        </div>
    </div>
</template>
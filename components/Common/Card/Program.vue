<template>
    <article
        class="grid bg-first-gray bg-opacity-5 py-6 px-8 border-2 border-transparent transition-colors duration-300 group hover:bg-first hover:border-first-light">

        <div
            class="w-14 h-14 bg-first-gray rounded-full grid place-items-center mb-4 transition-colors duration-500 group-hover:bg-first-light">
            <img src="/img/program1.png" alt="" class="w-10">
        </div>

        <h3 class="text-xl mb-4 group-hover:text-title-black">弯曲肌肉</h3>
        <p class="text-sm -tracking-tighter leading-6 group-hover:text-title-black">
            <!-- 随便写一段有关锻炼的文字 -->
            锻炼弯曲肌肉的方法,肌肉弯曲,自由活动
        </p>
        <NuxtLink to="/"
            class="justify-self-end mt-6 text-lg text-title opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:text-title-black">
            <Icon name="ri:arrow-right-line" class="block transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
    </article>
</template>
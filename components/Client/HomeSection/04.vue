<template>
    <section class="pt-16 max-w-6xl">
        <div>
            <div class="flex gap-12 flex-col">
                <div class="px-6">
                    <div class="mb-8 text-center">
                        <h2 class="text-first-alt mb-4 font-mono text-xl">最佳使用</h2>
                        <div class="text-3xl flex gap-x-3 items-center justify-center">
                            <h1 class="text-stroke-title text-stroke text-transparent">WHY</h1>
                            <h1>CHOOSE US?</h1>
                        </div>
                    </div>

                    <p class="text-center mb-10">
                        这里是一段关于网站使用的描述,就很简单的描述,就很简单的描述,就很简单的描述
                    </p>

                    <div class="grid grid-cols-2 gap-y-8 text-center">
                        <div v-for="item in 4">
                            <h3 class="text-4xl italic font-normal font-kaushan mb-1">200+</h3>
                            <p class="text-sm">Total Message</p>
                        </div>
                    </div>
                </div>

                <div class="relative px-6">
                    <img src="/img/choose-img.png" alt="" class="relative w-64  mx-auto z-10">
                    <div class="triangle-l absolute left-0  bottom-0 bg-first-dark h-[325px] w-[305px]" />
                    <div class="triangle-l absolute left-0  bottom-0 bg-first-alt h-[325px] w-[205px]" />
                    <div class="triangle-l absolute left-0  bottom-0 bg-first h-[325px] w-[105px]" />
                </div>
            </div>
        </div>
    </section>
</template>
<template>
    <section class="pt-32">
        <div class="max-w-6xl mx-auto relative">
            <div class="grid gap-12 md:grid-cols-2  ">
                <div class="px-6  z-10  relative md:order-1">
                    <UiSectionTitle title="Fithub" before="为什么" after="选择我们?" desc="我们网站的内容" />

                    <div class="grid grid-cols-2 gap-y-8 text-center">
                        <div v-for="item in 4">
                            <h3 class="text-4xl italic font-normal font-kaushan mb-1">200+</h3>
                            <!-- 订阅用户,器械数量,百科词条数,动作库数量 -->
                            <p class="text-sm">Total Message</p>
                        </div>
                    </div>
                </div>

                <div class="px-6 ">
                    <img src="/img/choose-img.png" alt="" class="relative w-[305px]  mx-auto z-10">
                    <div class="triangle-l absolute left-0  bottom-0 bg-first-dark h-[325px] w-[305px]" />
                    <div class="triangle-l absolute left-0  bottom-0 bg-first-alt h-[325px] w-[205px]" />
                    <div class="triangle-l absolute left-0  bottom-0 bg-first h-[325px] w-[105px]" />
                </div>
            </div>
        </div>
    </section>
</template>
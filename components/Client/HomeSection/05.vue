<template>
    <section class="pt-16">
        <div class="px-6">
            <div class="text-center mb-16">
                <h2 class="text-first-alt text-lg mb-4">Pricing</h2>
                <div class="text-3xl flex gap-x-3 items-center justify-center">
                    <h1 class="text-stroke-title text-stroke text-transparent">OUR</h1>
                    <h1>SPECIAL PLAN</h1>
                </div>
            </div>

            <div class="grid grid-cols-[285px] justify-center gap-y-8">
                <article v-for="item in 3" class="grid bg-first-gray bg-opacity-5 py-8 px-10 gap-y-8">
                    <header>
                        <div class="grid w-16 h-16 bg-first-gray rounded-full place-items-center mb-4">
                            <img src="/img/pricing1.png" alt="价格" class="w-9">
                        </div>
                        <h1 class="mb-4 text-base text-lg">BASE PACKAGE</h1>
                        <h2 class="text-3xl">$200</h2>
                    </header>
                    <ul class="grid gap-y-4">
                        <li v-for="item in 5" class="flex gap-2 items-center text-sm">
                            <Icon name="ri:checkbox-circle-line" class="text-xl text-first" />
                            5 Pages Website
                        </li>
                    </ul>
                    <CommonUiPrimaryLink label="Link" white border block>
                        <Icon name="ri:arrow-right-line"
                            class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                    </CommonUiPrimaryLink>
                </article>
            </div>

        </div>
    </section>
</template>
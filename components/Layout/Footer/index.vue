<template>
    <footer class="max-w-6xl overflow-hidden m-auto px-6 py-24">

        <div class="grid gap-y-16 pt-4">
            <div>
                <UiLogo size="sm" class="mb-2" />
                <p class="text-first-gray-400 mb-4">
                    你的健身百科全书
                </p>

                <FormSubscribe />
            </div>
            <div class="grid gap-y-10 gap-x-14 grid-cols-2 md:grid-cols-3">
                <UiLinks />
            </div>
        </div>

        <div class="mt-20 flex flex-col gap-8 justify-center text-center ">
            <div>
                <ul class="flex gap-x-6 justify-center items-center">
                    <li
                        class="rounded-full bg-first w-8 h-8 grid text-xl text-title-black hover:bg-first-dark cursor-pointer outline outline-offset-4 outline-first">
                        <nuxt-link class="justify-self-center">
                            <Icon name="ri:wechat-2-fill" />
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <p class="text-sm text-base-light">©️ Fithub 2023</p>
        </div>
    </footer>
</template>
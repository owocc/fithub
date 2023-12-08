<template>
    <footer class="max-w-6xl overflow-hidden m-auto px-6 py-24">
        <!-- footer container -->
        <div class="grid gap-y-16 pt-4">
            <div>
                <NuxtLink class="text-title flex items-center gap-x-2 mb-6 font-bold">
                    <img src="/img/logo-nav.png" alt="logo" class="w-6 h-6"> FitHub
                </NuxtLink>

                <p class="text-title mb-8">
                    你的健身百科全书
                </p>

                <form class="flex flex-col gap-5 md:flex-row">
                    <input type="email" name="user_email" placeholder="输入你的邮箱"
                        class="input-no-shadow outline-none py-5 pl-6 pr-14 bg-transparent border-2 border-first-alt">
                    <CommonUiPrimaryLink label="发送邮件" primary border />
                </form>
                <p class="absolute translate-y-4"></p>
            </div>
            <div class="grid gap-y-10 gap-x-14 grid-cols-2 md:grid-cols-3">
                <div v-for="item in 3">
                    <h3 class="text-xl mb-6">板块名</h3>
                    <ul class="grid gap-y-3">
                        <li v-for="item in 3">
                            <NuxtLink to="/" class="hover:text-first transition-colors duration-300">关于我们</NuxtLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <!-- container -->
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
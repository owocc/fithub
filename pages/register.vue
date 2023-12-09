<script setup>
definePageMeta({
    layout: 'blank'
})
</script>
<template>
    <!-- 左边图片,右边登录表单 -->
    <div class="flex min-h-screen gap-8 justify-center items-center mx-auto">
        <!-- 左边图片 -->
        <div class="hidden flex-1  h-screen w-full justify-center items-center md:flex overflow-hidden">
            <img src="/img/register-bg.jpg" alt="" class="h-full w-full object-cover opacity-50">
        </div>
        <!-- 右边登录表单 -->
        <div class="flex  max-w-sm h-screen flex-col justify-center items-center w-full">
            <div class="w-80">
                <h1 class="text-4xl font-bold mb-5">注册</h1>
                <form>
                    <div class="mb-4">
                        <label class="block mb-2 text-sm font-bold text-first-gray-500">邮箱</label>
                        <input type="text"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            placeholder="请输入邮箱" />
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-sm font-bold text-gray-700">密码</label>
                        <input type="password"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            placeholder="请输入密码" />
                    </div>
                    <div class="mb-4">
                        <UiButton class="w-full btn-primary  py-2 rounded-md" label="登录" />
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
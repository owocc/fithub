<script setup>
const userStore = useUserStore()
</script>
<template>
    <div class="flex flex-col lg:flex-row lg:justify-between items-center gap-4  my-5 bg-first-gray-950 p-4">
        <div class="flex flex-col lg:flex-row gap-4 items-center">
            <div class="w-14 h-14 rounded-full p-4 bg-first-gray-900">
                <img src="/img/logo-nav.png" class="h-full w-full object-contain">

            </div>
            <span class="my-3">@{{ userStore.userInfo?.nickname }}</span>
        </div>
        <div class="flex gap-10 text-sm">
            <CardProfileItem label="已发布百科" :value="userStore.userInfo?.encyclopediaCount" />
            <CardProfileItem label="获赞数" :value="userStore.userInfo?.likeCount" />
            <CardProfileItem label="注册天数" :value="userStore.userInfo?.createDay" />
        </div>

    </div>
</template>
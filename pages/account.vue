<script setup>
//设置SEO信息
useSeoMeta({
    title:'Fithub | 个人中心'
})


definePageMeta({
    middleware: ['auth']
})
const { logoutUser } = useAuth()

// 退出登录
const handlerLogout = () => {
    logoutUser()
    const router = useRouter()
    useCookie("userStore.userInfo.nickname").value = null
    router.push('/')
}

// 获取用户发布的百科


</script>

<template>
    <ClientOnly>
        <ShopNavigation title="个人中心" icon="i-ri-user-3-line">
            <template #after>
                <UiButton icon="i-ri-logout-box-r-line" desc="退出登录" @click="handlerLogout" />

            </template>
        </ShopNavigation>
        <!-- 用户卡片信息 -->
        <!-- component -->
        <div class="relative  w-full my-3">
            <CardProfile />
            <CommonUserEncyclopediaList />
        </div>
    </ClientOnly>
</template>
<script setup>
const userStore = useUserStore()
</script>
<template>
    <template v-if="!userStore.isLogin">
        <li>
            <UiButtonPrimary label="立即登录" to="/login" white />
        </li>
    </template>

    <template v-else>
        <li
            class="flex lg:items-center gap-8 lg:gap-4 bg-transparent lg:bg-first-gray-950 rounded-full  lg:py-2  lg:px-4  flex-col lg:flex-row">

            <UiLink tooltip="个人中心" to="/account">
                <Icon name="i-ri-user-3-line" class="text-xl !hidden lg:!inline-block" />
            </UiLink>
        </li>
    </template>
</template>

<script setup>
const userStore = useUserStore()
const { data, refresh } = await useAsyncData('userList', () => {
    return $fetch('/api/encyclopedia/list', {
        method: 'GET',
        query:{
            userId:userStore.userInfo.id
        }
    })
}, {
    default: () => ({ list: [], total: 0 }),
    server: false
})
</script>
<template>
    <h1 class="mb-4">我发布的百科</h1>
    <div class="flex flex-col gap-y-4">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CardEncyclopedia v-for="encyclopedia in data.list" :key="encyclopedia.id" :encyclopedia="encyclopedia" />
        </div>
    </div>
</template>
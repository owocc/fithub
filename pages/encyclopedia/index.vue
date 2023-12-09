<script setup>
const { data } = await useLazyAsyncData('encyclopediaList', () => {
    return $fetch('/api/encyclopedia/list', {
        method: 'GET'
    })
},
    {
        default: () => ({
            list: [],
            total: 0
        })
    }
)

</script>
<template>
    <ShopNavigation title="FitHub 健身百科" icon="i-ri-book-3-line" />
    <div class="w-full mb-4 py-3 px-4 bg-first-gray/5 rounded-md">
        <input type="text" placeholder="搜索想要找的百科名称" class="bg-transparent outline-none w-full">
    </div>

    <div class="flex flex-col gap-y-4">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CardEncyclopedia v-for="encyclopedia in data.list" :key="encyclopedia.id" :encyclopedia="encyclopedia" />
        </div>


        <!-- <div class="flex items-center justify-center">
            <UiButton icon="i-ri-arrow-down-line" class="btn-sm" label="查看更多" />
        </div> -->
    </div>
    <UiScrollUp />
</template>
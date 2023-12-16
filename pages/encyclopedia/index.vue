<script setup>
const title = ref('')

// 获取健身百科数据
const { data } = await useLazyAsyncData('encyclopediaList', () => {
    return $fetch('/api/encyclopedia/list', {
        method: 'GET',
        query: {
            title: title.value
        }
    })
},
    {
        default: () => ({
            list: [],
            total: 0
        }),
        watch: [title]
    }
)

</script>
<template>
    <ShopNavigation title="FitHub 健身百科" icon="i-ri-book-3-line">
        <template #after>
            <UiButton icon="i-ri-add-line" desc="发布百科" label="发布百科" to="/encyclopedia/publish" />
        </template>
    </ShopNavigation>
    <div class="flex justify-between gap-4">
        <UiSearch v-model="title" placeholder="搜索想要找的百科名称" type="text" />
    </div>


    <div class="flex flex-col gap-y-4">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CardEncyclopedia v-for="encyclopedia in data.list" :key="encyclopedia.id" :encyclopedia="encyclopedia" />
        </div>
    </div>
</template>
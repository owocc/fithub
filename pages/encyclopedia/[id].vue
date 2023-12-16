<script setup>
const id = useRoute().params.id
const { data, refresh } = await useFetch(`/api/encyclopedia/${id}`, {
    method: 'GET',
    default: () => ({
    })
})
const { fetchLike } = useEncyclopedia()
const handlerLike = async () => {
    const res = await fetchLike(id)
    useToast().success(res.msg)
    await refresh()

}   
</script>
<template>
    <ShopNavigation title="百科详情" back>
        <template #after>
            <UiButton @click="handlerLike" icon="i-ri-thumb-up-line" :label="''+data.like" />
        </template>
    </ShopNavigation>
    <div class=" flex flex-col gap-4">

        <div class="bg-first-gray-950 flex pt-12 pb-24 flex-col-reverse md:flex-row w-full gap-8">

            <div class="space-y-4 w-full flex flex-col items-center">
                <h1 class="text-2xl  text-center md:text-3xl md:text-left border-b-2 pb-4 border-first-gray-500 ">{{
                    data.title }}</h1>

                <article class="flex-1 prose md:prose-lg" v-html="data.content" />
            </div>



        </div>
    </div>
</template>




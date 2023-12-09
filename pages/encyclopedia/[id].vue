<script setup>
const id = useRoute().params.id
const { data } = await useFetch(`/api/encyclopedia/${id}`, {
    method: 'GET',
    default: () => ({})
})
</script>
<template>
    <ShopNavigation title="百科详情" back />
    <div class=" flex flex-col gap-4">

        <div class="bg-first-gray-950 p-4 flex flex-col-reverse md:flex-row w-full">

            <div class="flex flex-col w-full md:w-96 h-full">
                <img src="/test/run.webp" class="w-full object-contain">
                <div>
                    
                </div>
            </div>
            <div class="space-y-4">
                <h1 class="text-2xl  text-center md:text-3xl md:text-left border-b-2 pb-4 border-first-gray-500 ">{{
                    data.title }}</h1>
                <article class="flex-1 prose md:prose-lg" v-html="data.content" />
            </div>



        </div>
    </div>
</template>
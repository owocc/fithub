<script setup>
const id = useRoute().params.id
const { data } = await useFetch(`/api/sport/${id}`, {
    method: 'GET'
})
</script>
<template>
    <ShopNavigation title="动作详情" back />
    <div>
        <div class="flex flex-col md:flex-row gap-4 justify-around ">
            <CardSport hidd-action :sport="data" />
            <div class="space-y-4 flex-1 bg-first-gray-950 p-4 rounded-sm">
                <div class="space-y-4">
                    <h1 class="text-2xl  text-center md:text-left border-b-2 pb-4 border-first-gray-500 ">{{
                        data.name }}</h1>
                    <article class="flex-1 prose md:prose-lg lg:prose-xl" v-html="data.content" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// const { data } = await useFetch('/api/shop', {
//     method: 'GET',
//     query: {
//         limit: 3,
//         page: 1,
//     }
// })
</script>
<template>
    <section class="pt-32">
        <div class="px-6">
            <UiSectionTitle title="Fitness equipment" before="健身" after="器材" desc="这里有我们最新发布的健身器材推荐" />

            <!-- <div
                class="grid grid-cols-[285px] justify-center gap-y-8  md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(3,285px)] md:gap-x-8">
                <CardProductHero v-for="(item, index) in data.list" :product="item" :index="index" :key="item.id" />
            </div> -->

        </div>
    </section>
</template>
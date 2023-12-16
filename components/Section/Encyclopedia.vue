<!-- 健身百科推荐 -->
<script setup>
// 获取健身百科数据,这里获取推荐的数据
const { data } = await useFetch('/api/encyclopedia/list', {
  method: "get",
  query: {
    limit: 4
  }
})
</script>
<template>
  <section class="pt-16 pb-8 flex justify-center">
    <div class="px-6 max-w-6xl w-full">
      <div class="flex text-center flex-col gap-y-3 pb-12">
        <UiSectionTitle title="Fitness Encyclopedia" before="健身" after="百科" />
      </div>
      <!-- 渲染推荐百科 -->
      <div class="grid-cols-[225px] grid justify-center gap-y-8 lg:grid-cols-4 sm:gap-x-8 sm:grid-cols-[repeat(2,225px)]">
        <CardProgram v-for="(item, index) in data.list" :key="item.id" :encyclopedia="item" :index="index" />
      </div>

    </div>
  </section>
</template>
  
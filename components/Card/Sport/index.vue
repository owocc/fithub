<script setup>
const props = defineProps({
    sport: {
        type: Object,
        default: () => ({
            name: '动作名称',
            image: {
                url: '/img/logo-nav.png'
            },
            category: {
                name: '动作分类'
            }
        })
    },
    hiddAction: {
        type: Boolean,
        default: false
    }
})

const { viewSport } = useSport()
</script>
<template>
    <div class="p-4 bg-first-gray-950 flex flex-col rounded-sm items-center gap-y-4 justify-between">
        <div class="space-y-4">
            <div class="flex  justify-between items-center w-full">
                <h1>{{ props.sport?.name }}</h1>
                <UiBadge :label="props.sport.category?.name" />
            </div>
            <img :src="props.sport.image.url" alt="" class="min-h-64 object-contain w-full">
        </div>
        <template v-if="!hiddAction">
            <UiButton icon="i-ri-eye-line" label="查看动作详情" class="w-full 
        sm:w-auto btn-primary" @click="viewSport(props.sport.id)" />
        </template>
    </div>
</template>
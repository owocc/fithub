<script setup>
const props = defineProps({
    encyclopedia: {
        type: Object,
        default: () => ({
            image: {
                url: '/test/run.webp',
                alt: 'Fithub健身百科图片'
            }
        })
    }
})
const { viewDetail } = useEncyclopedia()
</script>
<template>
    <div
        class="p-4 hover:outline-first outline outline-transparent outline-2 transition-all bg-first-gray-950 rounded-sm flex flex-col items-center gap-y-4 h-full">
        <div>
            <img :src="props.encyclopedia.image.url" :alt="props.encyclopedia.image.alt" class="object-contain w-full">
        </div>
        <h1>{{ props.encyclopedia.title }}</h1>
        <p>{{ props.encyclopedia.description }}</p>
        <UiButton icon="i-ri-book-read-line" label="阅读详情" class="btn-primary" @click="viewDetail(props.encyclopedia.id)" />
    </div>
</template>
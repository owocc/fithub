<script setup>
const props = defineProps({
    encyclopedia: {
        type: Object,
        default: () => ({
            image: {
                url: '/img/logo-nav.png',
                alt: 'Fithub健身百科图片'
            }
        })
    }
})
const { viewDetail } = useEncyclopedia()
const { limitText } = useUtils()
</script>
<template>
    <div
        class="p-4 hover:outline-first outline outline-transparent outline-2 transition-all bg-first-gray-950 rounded-sm flex flex-col items-center gap-y-4 h-full justify-between">
        <div>
            <img :src="props.encyclopedia.image.url" :alt="props.encyclopedia.image.alt" class="object-contain w-full h-52">
        </div>
        <div class="flex flex-col gap-y-4 flex-1 h-full">
            <h1>{{ props.encyclopedia.title }}</h1>
            <p>{{ limitText(props.encyclopedia.description, 45) }}</p>

        </div>
        <UiButton icon="i-ri-book-read-line" label="阅读详情" class="btn-primary w-full"
            @click="viewDetail(props.encyclopedia.id)" />
    </div>
</template>
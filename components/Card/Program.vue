<script setup>
const programImages = [
    '/img/program1.png',
    '/img/program2.png',
    '/img/program3.png',
    '/img/program4.png',
]
const props = defineProps({
    index: {
        type: Number,
        default: 0,
    },
    encyclopedia: {
        type: Object,
        default: () => ({
            title: '推荐标题',
            description: '描述信息',
        })
    }
})

const { limitText } = useUtils()
const { viewDetail } = useEncyclopedia()
</script>
<template>
    <article
        class="grid bg-first-gray bg-opacity-5 py-6 px-8 border-2 border-transparent transition-colors duration-300 group hover:bg-first hover:border-first-light w-full">

        <div
            class="w-14 h-14 bg-first-gray rounded-full grid place-items-center mb-4 transition-colors duration-500 group-hover:bg-first-light">
            <img :src="programImages[props.index]" alt="图标" class="w-10">
        </div>

        <h3 class="text-xl mb-4 group-hover:text-title-black">{{ limitText(props.encyclopedia.title, 5) }}</h3>
        <p class="text-sm -tracking-tighter leading-6 group-hover:text-title-black">
            <!-- 随便写一段有关锻炼的文字 -->
            {{ limitText(props.encyclopedia.description, 20) }}
        </p>
        <button @click="viewDetail(props.encyclopedia.id)"
            class="justify-self-end mt-6 text-lg text-title opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:text-title-black">
            <Icon name="ri:arrow-right-line" class="block transition-transform duration-300 group-hover:translate-x-1" />
        </button>
    </article>
</template>
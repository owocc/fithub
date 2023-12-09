<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Fithub 健身器材专卖店'
    },
    back: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
    }
})
// 返回上一页
const router = useRouter()
const handlerBack = () => {

    router.back()
}
</script>
<template>
    <nav class="flex justify-between w-full mb-4 items-center">


        <div class="flex items-center gap-x-4">
            <slot name="before">
                <UiButton v-if="props.back" desc="返回" icon="i-ri-arrow-go-back-line" @click="handlerBack"
                    class="btn-square " gray />
            </slot>
            <slot name="title">
                <div class="flex text-white items-center gap-2 text-xl md:text-2xl">
                    <Icon v-if="props.icon" :name="props.icon" />
                    <h1>{{ props.title }}</h1>
                </div>
            </slot>
        </div>


        <slot name="after" />
    </nav>
</template>
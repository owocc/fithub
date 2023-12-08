<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    before: {
        type: String,
        required: true
    },
    after: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    }
})
</script>
<template>
    <div>
        <div class="mb-8 text-center">
            <h2 class="text-first-alt mb-4 text-xl font-kaushan">{{ props.title }}</h2>
            <div class="text-3xl flex  flex-col gap-y-1 items-center justify-center md:flex-row md:text-5xl">
                <h1 class="text-stroke-title text-stroke text-transparent">{{ props.before }}</h1>
                <h1>{{ props.after }}</h1>
            </div>
        </div>

        <p class="text-center mb-10" v-if="props.desc">
            {{ props.desc }}
        </p>
    </div>
</template>
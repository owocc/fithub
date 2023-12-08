<script setup>

// 最大文字长度
const t = "有氧运动属于长距离耐久性的训练，它是通过连续不断和反复多次的活动，并在一定的时间内，以一定的速度和一定的训练强度，要求完成一定的运动量。在整个运动过程中我们能够顺畅地完成呼吸过程，只是呼吸的缓慢与急促之分。其运动时间较长(约15分钟或以上)，运动强度在中等或中上的程度，为了达到训练目的通常要达到一定的心率数值(最大心率之60%至80%)。例如：长跑、游泳、跳绳、健身操、单车、登山等等。"
const spilit = (str) => {
    return `${str.slice(0, 30)}...`
}
</script>
<template>
    <div @click="$router.push('/encyclopedia/detail')"
        class="p-4 hover:outline-first outline outline-transparent outline-2 transition-all bg-first-gray-950 rounded-sm flex flex-col items-center gap-y-4">
        <img src="/test/run.webp" alt="" class="object-contain w-full">
        <h1>有氧运动</h1>
        <p>{{ spilit(t) }}</p>
        <UiButton icon="i-ri-book-read-line" label="阅读详情" class="btn-primary" />
    </div>
</template>
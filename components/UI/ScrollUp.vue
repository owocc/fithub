<script setup>
import { gsap } from 'gsap/gsap-core'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const { state } = useScroll(350)
const button = ref(null)

// 滚动到顶部
const handlerToUp = () => {
    gsap.to(window, {
        duration: 0.2,
        scrollTo: 0,
    })
}

// 切换按钮显示
const handlerShowButton = (val) => {
    if (val) {
        gsap.to(button.value, {
            duration: 0.2,
            opacity: 1,
            y: 0,
        })
    } else {
        gsap.to(button.value, {
            duration: 0.2,
            opacity: 0,
            y: 100,
        })
    }
}

watch(
    () => state.value,
    (val) => {
        handlerShowButton(val)
    }
)

onMounted(() => {
    handlerShowButton(state.value)
})
</script>
<template>
    <button @click="handlerToUp" ref="button"
        class="fixed bottom-12 right-4 text-2xl bg-first inline-flex text-title-black p-1 z-[9999] transition-all duration-300 hover:bg-first-dark hover:-translate-y-1 group">
        <Icon name="ri:arrow-up-line"
            class="group-hover:-translate-y-1 transition-transform divide-fuchsia-200 ease-in-out" />
    </button>
</template>
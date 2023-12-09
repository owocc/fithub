<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(Observer)

const scrollButton = ref(null)
// 判断是否需要显示按钮
onMounted(async () => {
    await nextTick(() => {
        Observer.create({
            target: window,
            type: 'scroll',
            onChangeY: (e) => {
                if (e.scrollY() >= 500) {
                    gsap.to(scrollButton.value, {
                        duration: 0.05,
                        opacity: 1,
                        y: 0,
                    })
                } else {
                    gsap.to(scrollButton.value, {
                        duration: 0.05,
                        opacity: 0,
                        y: 100
                    })
                }
            }
        })
    })
})
// 滚动到顶部
const scrollUp = () => {
    gsap.to(window, {
        duration: 0.3,
        scrollTo: 0,
        ease: "power2.inOut"
    })
}

</script>
<template>
    <button @click="scrollUp" ref="scrollButton"
        class="fixed bottom-12 right-4 text-2xl bg-first inline-flex text-title-black p-1 z-50 transition-all duration-300 hover:bg-first-dark hover:-translate-y-1 group">
        <Icon name="ri:arrow-up-line"
            class="group-hover:-translate-y-1 transition-transform divide-fuchsia-200 ease-in-out" />
    </button>
</template>
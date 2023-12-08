<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(Observer)

// 判断是否需要现实按钮,如果滚动高度大于350则显示
const showScroll = () => {
    // 使用gsap获取滚动高度

}

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
    <button @click="scrollUp"
        class="fixed bottom-12 right-4 text-2xl bg-first inline-flex text-title-black p-1 z-50 transition-all duration-300 hover:bg-first-dark hover:-translate-y-1 group">
        <Icon name="ri:arrow-up-line"
            class="group-hover:-translate-y-1 transition-transform divide-fuchsia-200 ease-in-out" />
    </button>
</template>
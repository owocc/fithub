<script setup>

const message = ref('')
const height = ref(0)
const weight = ref(0)

// 计算 BMI
const calculate = () => {
    if (height.value === 0 || weight.value === 0) {
        message.value = '请输入正确的身高和体重😘 '
        return
    }
    //高度单位cm，体重单位kg    
    const bmi = weight.value / (height.value / 100) ** 2
    if (bmi < 18.5) {
        // 提示语写的可爱点
        message.value = '你的体重过轻'
    } else if (bmi < 24) {
        message.value = '你的体重正常'
    } else if (bmi < 28) {
        message.value = '你的体重过重'
    } else if (bmi < 35) {
        message.value = '你的体重有点肥胖了,快锻炼起来🏋️'
    } else {
        message.value = '你的体重严重肥胖了!快锻炼起来🏋️'
    }
}

</script>
<template>
    <section class="pt-32">
        <div class="grid max-w-6xl mx-auto px-6 md:pl-6 md:pr-24 md:grid-cols-[repeat(2,max-content)] md:justify-between">
            <div>
                <div
                    class="text-3xl flex  flex-col gap-y-1 items-center justify-center mb-8 text-center md:flex-row md:gap-x-4 md:text-left md:justify-start">
                    <h1 class="text-stroke-title text-stroke text-transparent font-mono md:text-5xl">BMI</h1>
                    <h1 class="md:text-5xl">计算器</h1>

                </div>

                <p class="mb-10">
                    快速的帮你计算BMI，让你更好的了解自己的身体状况，更好的制定健身计划
                </p>

                <form class="grid gap-y-4 lg:grid-cols-2 md:gap-x-4">
                    <div class="relative border-2 border-first-light">
                        <input type="number" placeholder="身高" v-model="height"
                            class="w-full bg-transparent py-5 pl-5 pr-14 outline-none arrow-hide border-none input-no-shadow">
                        <label for="" class="absolute right-5 top-5 text-title">cm</label>
                    </div>

                    <div class="relative border-2 border-first-light">
                        <input type="number" placeholder="体重" v-model="weight"
                            class="w-full bg-transparent py-5 pl-5 pr-14 outline-none arrow-hide border-none input-no-shadow">
                        <label for="" class="absolute right-5 top-5 text-title">kg</label>
                    </div>
                    <UiPrimaryLink @click="calculate" label="快速计算" primary border class="mt-6 lg:col-span-2">
                        <Icon name="ri:arrow-right-line"
                            class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                    </UiPrimaryLink>
                </form>
                <!-- 这里展示 BMI 计算结果喝提示 -->
                <p class="absolute translate-y-4">{{ message }}</p>
            </div>
            <img src="/img/calculate-img.png" class="w-52 md:w-60 justify-self-center mt-12">
        </div>
    </section>
</template>

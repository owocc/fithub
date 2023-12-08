<template>
    <ShopNavigation title="百科详情" icon="i-ri-book-read-line" back />
    <div class=" flex flex-col gap-4">
        <h1 class="text-2xl text-center">有氧运动</h1>
        <div class="bg-first-gray-950 p-4 flex flex-col-reverse md:flex-row">

            <img src="/test/run.webp" class="w-full max-w-xs mx-auto object-contain ">
            <p>
                有氧运动属于长距离耐久性的训练，它是通过连续不断和反复多次的活动，并在一定的时间内，以一定的速度和一定的训练强度，要求完成一定的运动量。在整个运动过程中我们能够顺畅地完成呼吸过程，只是呼吸的缓慢与急促之分。其运动时间较长(约15分钟或以上)，运动强度在中等或中上的程度，为了达到训练目的通常要达到一定的心率数值(最大心率之60%至80%)。例如：长跑、游泳、跳绳、健身操、单车、登山等等。
            </p>

        </div>
        <!-- 相关动作 -->
        <h1 class="text-center text-2xl">相关动作</h1>
        <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 w-full">
            <UiButton label="跑步" class="w-full hover:btn-primary" v-for="item in 3" />
        </div>
    </div>
</template>
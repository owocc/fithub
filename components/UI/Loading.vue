<script setup>
const nuxtApp = useNuxtApp()
const isLoading = ref(false)
nuxtApp.hook('page:start', () => {
    isLoading.value = true
})
nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
        isLoading.value = false
    }, 500)
})
</script>
<template>
    <Teleport to="body" v-if="isLoading">
        <div class="h-screen w-screen flex justify-center items-center bg-base-body fixed z-[999] top-0 left-0 overflow-hidden">
            <div class="flex flex-col gap-y-4 items-center justify-center  relative">
                <div class="h-32 w-32 blur-2xl  animate-ping bg-primary/80 dark:bg-first/50 absolute  -z-10"></div>

                <div class="animate-bounce flex items-center gap-4">
                    <img src="/img/logo-nav.png" class="w-12" />
                    <h1 class="text-5xl">FitHub</h1>
                </div>
            </div>
        </div>
    </Teleport>
</template>
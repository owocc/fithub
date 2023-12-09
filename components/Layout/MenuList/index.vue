<script setup>
import clsx from 'clsx'

const { menuList } = useClientConfig()

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
const listContainerClasses = computed(() => clsx(
    'fixed bg-base-body bg-opacity-80 backdrop-blur-xl transition-all duration-500 top-0 w-4/5 h-full border-l-2 border-first-gray z-50',
    'md:w-1/2',
    props.visible ? 'right-0' : '-right-full',
    'lg:static lg:bg-opacity-0 lg:backdrop-blur-none lg:h-auto lg:border-none lg:w-auto ')
)
const emit = defineEmits(['close'])
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    emit('close')
})

</script>

<template>
    <div :class="listContainerClasses">
        <ul class="pt-20 pl-12 flex flex-col gap-y-10 text-title lg:flex-row lg:p-0 lg:items-center lg:gap-12 lg:bg-none">
            <li v-for="item in menuList">
                <NuxtLink :to="item.to" class="transition-colors duration-300 hover:text-first" active-class="text-first">
                    {{ item.text }}
                </NuxtLink>
            </li>
            <li>
                <CommonUiPrimaryLink label="立即注册" to="/" white />
            </li>
        </ul>
        <div class="absolute top-4 right-5 text-xl cursor-pointer lg:hidden text-title" @click="emit('close')">
            <Icon name="ri:close-line" />
        </div>
    </div>
</template>
  

  
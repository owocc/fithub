<script setup>
import clsx from 'clsx'
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})

// 菜单列表容器样式
const listContainerClasses = computed(() => clsx(
    'fixed bg-base-body bg-opacity-80 backdrop-blur-xl transition-all duration-500 top-0 w-4/5 h-full border-l-2 border-first-gray z-50',
    'md:w-1/2',
    props.visible ? 'right-0' : '-right-full',
    'lg:static lg:bg-opacity-0 lg:backdrop-blur-none lg:h-auto lg:border-none lg:w-auto ')
)

// 在页面进行跳转时，关闭菜单
const emit = defineEmits(['close'])
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    emit('close')
})


// 获取菜单列表
const { menuList } = useClientConfig()
</script>

<template>
    <div :class="listContainerClasses">
        <ul class="pt-20 pl-12 flex flex-col gap-y-10 text-title lg:flex-row lg:p-0 lg:items-center lg:gap-12 lg:bg-none">
            <li v-for="item in menuList">
                <UiLink :to="item.to">
                    {{ item.text }}
                </UiLink>
            </li>

            <LayoutHeaderActions />
        </ul>
        <div class="absolute top-4 right-5 text-xl cursor-pointer lg:hidden text-title" @click="emit('close')">
            <Icon name="ri:close-line" />
        </div>
    </div>
</template>
  

  
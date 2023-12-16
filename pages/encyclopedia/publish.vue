<script setup>

// 文章内容
const formData = reactive({
    title: '',
    content: '',
    description: '',
})

const { createEncylopedia, viewDetail } = useEncyclopedia()

const handlerSubmit = async () => {
    if (!formData.title) {
        useToast().error('请输入标题')
    }
    if (!formData.content) {
        useToast().error('请输入内容')
    }

    if (!formData.description) {
        useToast().error('请输入描述')
    }

    const res = await createEncylopedia(toRaw(formData))

    useToast().success('发布成功,正在跳转...')

    //清空数据
    formData.title = ''
    formData.content = ''
    formData.description = ''

    viewDetail(res.id)

}

</script>
<template>
    <div class="px-6">
        <main class="max-w-6xl mx-auto flex flex-col gap-y-4">
            <ShopNavigation title="发布百科" back />
            <div class="flex items-center gap-4 flex-col">
                <UiSearch v-model="formData.title" placeholder="请输入标题" />
                <UiSearch v-model="formData.description" placeholder="描述" />
            </div>
            <Editor v-model="formData.content" />
            <UiButtonPrimary @click="handlerSubmit" primary border block label="发布" />
        </main>
    </div>
</template>
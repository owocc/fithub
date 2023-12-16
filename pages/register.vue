<script setup>
definePageMeta({
    layout: 'account' //切换布局
})

const formData = reactive({
    username: '',
    password: '',
    nickname: ''
})

const handlerSubmit = async (e) => {
    e.preventDefault() //阻止默认提交
    // 校验表单
    if (!formData.username || !formData.password || !formData.nickname) {
        useToast().error('请填写完整表单')
        return
    }
    // 注册
    const { registerUser } = useAuth()
    await registerUser(toRaw(formData))
    const router = useRouter()
    router.push('/login')
}

</script>
<template>
    <h1 class="text-4xl font-bold mb-5">注册</h1>
    <form @submit="handlerSubmit">
        <!-- 表单输入 -->
        <UiInput label="昵称" type="text" placeholder="请输入昵称" v-model="formData.nickname" />
        <UiInput label="用户名" type="text" placeholder="请输入用户名" v-model="formData.username" />
        <UiInput label="密码" type="password" placeholder="请输入密码" v-model="formData.password" />

        <!-- 操作按钮 -->
        <div class="mb-4">
            <UiButtonPrimary block primary border label="注册" />
        </div>
    </form>
    <div>
        <UiLink to="/login">登录账号</UiLink>
    </div>
</template>
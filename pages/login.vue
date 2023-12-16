<script setup>
definePageMeta({
    layout: 'account'
})
const formData = reactive({
    username: '',
    password: ''
})

const handlerSubmit = async (e) => {
    e.preventDefault() //阻止默认提交
    // 校验表单
    if (!formData.username || !formData.password) {
        useToast().error('请填写完整表单')
        return
    }
    // 登录
    const { loginUser } = useAuth()
    await loginUser(toRaw(formData))
    const router = useRouter()
    router.push('/')
}
</script>
<template>
    <h1 class="text-4xl font-bold mb-5">登录</h1>
    <form @submit="handlerSubmit">
        <UiInput label="用户名" type="text" placeholder="请输入用户名" v-model="formData.username" />

        <UiInput label="密码" type="password" placeholder="请输入密码" v-model="formData.password" />
        <div class="mb-4">
            <UiButtonPrimary block primary border label="登录" />
        </div>
    </form>
    <div>
        <UiLink to="/register">注册账号</UiLink>
    </div>
</template>
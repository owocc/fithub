<script setup>

const mail = ref('')

// 请求订阅
const handlerSendCustom = async (event) => {
    event.preventDefault() // 阻止表单默认提交


    if (mail.value === '') {
        useToast().error('请填写邮件地址')
        return
    }
    await $fetch('/api/subscribe', {
        method: 'POST',
        body: {
            mail: mail.value
        }
    })
    mail.value = ''
    useToast().success('订阅成功')
}
</script>

<template>
    
    <form class="flex flex-col gap-5 md:flex-row" @submit="handlerSendCustom">
        <input type="email" name="user_email" placeholder="输入你的邮箱"
            class="input-no-shadow outline-none py-5 pl-6 pr-14 bg-transparent border-2 border-first-alt" v-model="mail">
        <UiButtonPrimary label="订阅消息" primary border />
    </form>
    <p class="absolute translate-y-4"></p>
</template>
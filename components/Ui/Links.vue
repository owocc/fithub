<script setup>

const links = [
    {
        name: '健身有了方法',
        url: 'https://www.jianshenup.com/'
    },
    {
        name: '京东',
        url: 'https://www.jd.com'
    },
    {
        name: '李宁',
        url: 'https://www.lining.com/'
    },
    {
        name: '特步',
        url: 'https://m.xtep.com.cn/'
    },

]

</script>
<template>
    <div>
        <h3 class="text-xl mb-6">友情链接</h3>
        <ul class="grid gap-y-3">
            <li v-for="link in links">
                <a :href="link.url" class="hover:text-first transition-colors duration-300">{{ link.name }}</a>
            </li>
        </ul>

    </div>
</template>
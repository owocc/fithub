<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup >

useSeoMeta({
  description: 'FitHub是一个健身百科全书',
  ogImage: '/img/preview.png',
})

useHead({
  htmlAttrs: {
    lang: 'zh'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>
<template>
  <div>
    Admin
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  description: 'Admin',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'zh'
  },
  title: '后台管理'
})
</script>

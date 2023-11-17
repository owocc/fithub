<template>
  <section class="pt-16 max-w-6xl pb-8">
    <div class="grid grid-cols-2 justify-items-center gap-8 w-full px-6">
      <img v-for="logo in logos" :src="logo"  alt="Logo 图片" class="w-[120px]">
    </div>
  </section>
</template>

<script setup>
const logos = ref([
  '/img/logo1.png',
  '/img/logo2.png',
  '/img/logo3.png',
  '/img/logo4.png'
])

</script>


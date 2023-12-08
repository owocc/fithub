<template>
  <section class="pt-16 pb-8">
    <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-8 w-full px-6 ">
      <div v-for="logo in logos" class="hover:bg-title hover:bg-opacity-10 p-6 transition-colors">
        <img :src="logo" alt="Logo 图片" class="w-[120px] ">
      </div>
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


<template>
  <section class="pt-16 pb-8 flex justify-center">
    <div class="px-6 max-w-6xl">
      <div class="flex text-center flex-col gap-y-3 pb-12">
        <h2 class="text-xl font-mono text-first-alt">我们的计划</h2>

        <div class=" flex justify-center gap-x-3 items-center flex-col gap-y-1">
          <h1 class="text-stroke text-stroke-white text-transparent tracking-wider text-2xl">健身人士</h1>
          <h1 class="font-black text-3xl my-2 tracking-wider">专属百科</h1>
        </div>
      </div>

      <div class="grid-cols-[225px] grid justify-center gap-y-8 lg:grid-cols-4 sm:gap-x-8 sm:grid-cols-[repeat(2,225px)]">
        <CommonCardProgram />
        <CommonCardProgram />
        <CommonCardProgram />
        <CommonCardProgram />
      </div>

    </div>
  </section>
</template>

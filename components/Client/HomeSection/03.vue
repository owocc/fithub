<template>
  <section class="pt-16 pb-8">
    <div class="max-w-6xl px-6">
      <div class="flex text-center flex-col gap-y-3 pb-12">
        <h2 class="text-xl font-mono text-first-alt">我们的计划</h2>

        <div class="text-2xl flex justify-center gap-x-3 items-center">
          <h1 class="text-stroke text-stroke-white text-transparent tracking-wider">健身人士</h1>
          <h1 class="font-black my-2 tracking-wider">专属百科</h1>
        </div>
      </div>

      <div class="grid-cols-[225px] grid justify-center gap-y-8">
        <CommonCardProgram />
        <CommonCardProgram />
        <CommonCardProgram />
        <CommonCardProgram />
      </div>

    </div>
  </section>
</template>

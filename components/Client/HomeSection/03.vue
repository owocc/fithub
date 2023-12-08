<template>
  <section class="pt-16 pb-8 flex justify-center">
    <div class="px-6 max-w-6xl">
      <div class="flex text-center flex-col gap-y-3 pb-12">
        <UiSectionTitle title="Fitness Encyclopedia" before="健身" after="百科" />
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

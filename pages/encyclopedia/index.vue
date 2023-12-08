<template>
    <ShopNavigation title="FitHub 健身百科" icon="i-ri-book-3-line" />
    <div class="flex flex-col gap-y-4">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CardEncyclopedia v-for="item in 8" />
        </div>
        <div class="flex items-center justify-center">
            <UiButton icon="i-ri-arrow-down-line" class="btn-sm" label="查看更多" />
        </div>
    </div>
    <UiScrollUp />
</template>
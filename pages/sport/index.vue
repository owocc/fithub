<template>
    <ShopNavigation icon="i-ri-walk-line" title="FitHub 健身动作库" />
    <div class="w-full mb-4 py-3 px-4 bg-first-gray/5 rounded-md">
        <input type="text" placeholder="搜索想要找的动作名称" class="bg-transparent outline-none w-full">
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CardSport  v-for="item in 8"/>
    </div>
</template>
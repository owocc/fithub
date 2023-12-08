<template>
    <ShopNavigation title="我的购物车" back />
    <!-- 一个表格,记录商品的购物车信息,以及修改数量和删除商品 -->
    <ClientOnly>
        <div class="w-full">
            <ShopCartTable />
        </div>
    </ClientOnly>
</template>



<template>
    <tr
        class="flex w-full justify-around flex-col gap-y-4 md:flex-row p-4 rounded-sm bg-first-gray-950 outline outline-transparent hover:outline-first transition-all">
        <td class="flex md:flex-col gap-4 w-full md:text-center md:items-center">
            <img src=" /img/home-img.png" class="w-36" />
            <div class="flex flex-col">
                <b class="text-lg">商品名称</b>
                <p class="text-sm text-first-gray-400">商品描述</p>
            </div>
        </td>

        <ShopCartTableRowContainer label="单价">
            <span>114514</span>
        </ShopCartTableRowContainer>

        <ShopCartTableRowContainer label="小计">
            <span>¥ 12</span>
        </ShopCartTableRowContainer>

        <ShopCartTableRowContainer label="数量">
            <UiCounter />
        </ShopCartTableRowContainer>

        <td class="w-full flex justify-center items-center">
            <UiButton label="删除" class="btn-error w-full" icon="i-ri-delete-bin-line" />
        </td>
    </tr>
</template>
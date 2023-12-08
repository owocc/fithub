<template>
    <div class="w-full flex-1 flex-col flex  gap-4 bg-first-gray-950 p-4 justify-between rounded-sm">
        <div class="flex flex-col gap-2">
            <h1>商品名称</h1>
            <p class="text-first-gray-400">
                这是一张图片，图片中有一套银色和黑色的哑铃和杠铃，它们在灰色的背景上。哑铃和杠铃上有红色和黑色的条纹。哑铃和杠铃以对称的方式排列。图片的左上角有一个红色和橙色的“X”标志。图片的右上角和左下角有中文文字。文字内容为：“不锈钢哑铃，无缝焊接，轻便易携，12.12，108.9”。
            </p>
        </div>

        <div class="flex gap-4 flex-col md:flex-row md:justify-end">
            <div class="flex gap-4">
                <UiButton label="查看百科" icon="i-ri-book-3-line" class="btn-accent w-full md:w-auto" desc="查看器材相关百科" />
                <UiButton label="推荐动作" icon="i-ri-walk-line" class="btn-secondary w-full md:w-auto"
                    desc="商品到了以后可要快快行动起来 !" />
            </div>
            <UiButton label="加入购物车" icon="i-ri-shopping-cart-2-line" class="btn-primary w-full md:w-auto" desc="快到车里来~" />
        </div>
    </div>
</template>
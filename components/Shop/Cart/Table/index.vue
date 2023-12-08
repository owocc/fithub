<template>
    <table class="w-full flex flex-col gap-y-4">
        <thead class="hidden md:block ">
            <ShopCartTableHeader />
        </thead>
        <tbody class=" flex-col flex gap-y-4">
            <ShopCartTableRow  v-for="item in 4"/>
        </tbody>

        <tfoot class="w-full">
            <ShopCartTableFooter />
        </tfoot>
    </table>
</template>
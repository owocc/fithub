<template>
  <div v-if="editor" class="flex gap-1 w-full flex-wrap md:flex-nowrap md:justify-between bg-first-gray-800 rounded-xl outline-4 outline outline-first-gray-800 py-3 px-4 ">
    <div class="md:w-full flex flex-wrap gap-1">
      <EditorMenuButton v-for="menuItem in leftMenus" :menuItem="menuItem" :key="menuItem.key" />
    </div>
    <div class="md:w-full items-start gap-1 flex flex-wrap md:justify-end">
      <EditorMenuButton v-for="menuItem in rightMenus" :menuItem="menuItem" :key="menuItem.key" />
    </div>
  </div>
</template>

<script setup>
const editor = inject('editor')

const { leftMenus, rightMenus } = useEditorConfig()
</script>

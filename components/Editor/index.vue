<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'

const style = clsx(
  'prose dark:prose-invert min-h-[200px]  dark:border-slate-600  w-full max-w-7xl  rounded-md  focus:outline-none '
)

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
// 创建编辑器
const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit],
  editorProps: {
    attributes: {
      class: style,
    },
  },
  onUpdate() {
    emit('update:modelValue', editor.value.getHTML())
  }
})

provide('editor', editor)

onBeforeUnmount(() => {
  editor.value.destroy()
})


</script>


<template>
  <div class="w-full bg-first-gray-900 grid grid-row-8 gap-y-2 pb-6   grid-cols-1 rounded-lg  ">
    <div class="col-span-1 w-full">
      <EditorMenu :editor="editor" />
    </div>
    <div class="h-[450px] pt-4 overflow-y-auto px-4 pb-8 col-span-7">
      <EditorContent :editor="editor" />
    </div>
  </div>
</template>


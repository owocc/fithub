// 编辑器的配置
export default function UseEditorConfig() {
  //编辑器左侧菜单
  const leftMenus = [
    {
      key: 'k-bold',
      activeParams: 'bold',
      icon: 'i-tabler-bold',
      shortcuts: ['Ctrl', 'B'],
      text: '粗体',
      handlerClick: (editor) => editor.chain().focus().toggleBold().run(),
    },
    {
      key: 'k-italic',
      activeParams: 'italic',
      icon: 'i-tabler-italic',
      shortcuts: ['Ctrl', 'I'],
      text: '斜体',
      handlerClick: (editor) => editor.chain().focus().toggleItalic().run(),
    },
    {
      key: 'k-underline',
      activeParams: 'underline',
      icon: 'i-tabler-underline',
      text: '下划线',
    },
    {
      key: 'k-strikethrough',
      activeParams: 'strike',
      icon: 'i-tabler-strikethrough',
      text: '删除线',
      handlerClick: (editor) => editor.chain().focus().toggleStrike().run(),

    },
    {
      key: 'k-codeBlock',
      activeParams: 'codeBlock',
      icon: 'i-tabler-code-dots',
      text: '代码块',
      handlerClick: (editor) => editor.chain().focus().toggleCodeBlock().run(),
    },
    {
      key: 'k-heading-1',
      activeParams: ['heading', { level: 1 }],
      icon: 'i-tabler-h-1',
      text: '一级标题',
      handlerClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      key: 'k-heading-2',
      activeParams: ['heading', { level: 2 }],
      icon: 'i-tabler-h-2',
      text: '二级标题',
      handlerClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      key: 'k-heading-3',
      activeParams: ['heading', { level: 3 }],
      icon: 'i-tabler-h-3',
      text: '三级标题',
      handlerClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      key: 'k-heading-4',
      activeParams: ['heading', { level: 4 }],
      icon: 'i-tabler-h-4',
      text: '四级标题',
      handlerClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 4 }).run(),
    },
    {
      key: 'k-bulletList',
      activeParams: 'bulletList',
      icon: 'i-tabler-list',
      text: '无序列表',
      handlerClick: (editor) => editor.chain().focus().toggleBulletList().run(),
    },
    {
      key: 'k-list',
      activeParams: 'orderedList',
      icon: 'i-tabler-list-numbers',
      text: '数字列表',
      handlerClick: (editor) =>
        editor.chain().focus().toggleOrderedList().run(),
    },
    {
      key: 'k-blockquote',
      activeParams: 'blockquote',
      icon: 'i-tabler-blockquote',
      text: '引用块',
      handlerClick: (editor) => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      key: 'k-horizontalRule',
      activeParams: 'horizontalRule',
      icon: 'i-tabler-ruler-3',
      text: '水平线',
      handlerClick: (editor) =>
        editor.chain().focus().setHorizontalRule().run(),
    },
  ]

  // 编辑器右侧菜单
  const rightMenus = [
    {
      key: 'k-undo',
      activeParams: 'undo',
      icon: 'i-tabler-arrow-back-up',
      shortcuts: ['Ctrl', 'Z'],
      text: '撤回',
      handlerClick: (editor) => editor.chain().focus().undo().run(),
    },
    {
      key: 'k-redo',
      activeParams: 'redo',
      icon: 'i-tabler-arrow-forward-up',
      shortcuts: ['Ctrl', 'Shift', 'Z'],
      text: '重做',
      handlerClick: (editor) => editor.chain().focus().redo().run(),
    },
  ]
  return {
    leftMenus,
    rightMenus,
  }
}

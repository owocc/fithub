interface MenuListItem {
  to: string
  text: string
}

export default function useClientConfig () {
  const menuList = ref<MenuListItem[]>([
    {
      to: '/',
      text: '首页'
    },
    {
      to: '/_tailwind/',
      text: '肌肉训练百科'
    },
    {
      to: '/',
      text: '专业名词百科'
    }
  ])
  return {
    menuList
  }
}

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
      to: '/shop',
      text: '专卖店'
    },
    {
      to: '/encyclopedia',
      text: '健身百科'
    },
    {
      to: '/sport',
      text: '动作库'
    },
  ])
  return {
    menuList
  }
}

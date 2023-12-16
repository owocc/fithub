export default function useClientConfig() {
  const menuList = ref([
    {
      to: "/",
      text: "首页",
    },
    {
      to: "/encyclopedia",
      text: "健身百科",
    },
    {
      to: "/sport",
      text: "动作库",
    },
  ]);
  return {
    menuList,
  };
}

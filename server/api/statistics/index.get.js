import { contentStatistics } from "~/server/db/statistics";

export default defineEventHandler(async (event) => {
  const { encyclopediaTotal, productTotal, sportTotal, subscribeTotal } =
    await contentStatistics();

  return [
    {
      label: "百科数量",
      value: encyclopediaTotal,
      key: "encyclopediaTotal",
    },
    {
      label: "产品数量",
      value: productTotal,
      key: "productTotal",
    },
    {
      label: "动作数量",
      value: sportTotal,
      key: "sportTotal",
    },
    {
      label: "订阅用户",
      value: subscribeTotal,
      key: "subscribeTotal",
    },
  ];
});

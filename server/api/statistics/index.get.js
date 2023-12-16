import { contentStatistics } from "~/server/db/statistics";

export default defineEventHandler(async (event) => {
  const { encyclopediaTotal, sportTotal, subscribeTotal } =
    await contentStatistics();

  return [
    {
      label: "百科数量",
      value: encyclopediaTotal,
      key: "encyclopediaTotal",
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

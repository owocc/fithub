import { getSport } from "~/server/db/sport";
export default defineEventHandler(async (event) => {
  const paramsId = getRouterParam(event, "id");
  // 将id转换为数字
  const id = parseInt(paramsId, 10);

  return await getSport(id);
});

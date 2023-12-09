import { getEncyclopedia } from "~/server/db/encyclopedia";

export default defineEventHandler(async (event) => {
  const paramsId = getRouterParam(event, "id");
  // 将id转换为数字
  const id = parseInt(paramsId, 10);
  return await getEncyclopedia(id);
});

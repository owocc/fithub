import { getEncyclopediaList } from "../../db/encyclopedia";
export default defineEventHandler(async (evnet) => {
  const pagination = paginationHelper(evnet);
  const { list, total } = await getEncyclopediaList({
    pagination,
  });
  return {
    list,
    total,
  };
});

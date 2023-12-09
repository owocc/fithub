import { getEncyclopediaPage } from "../../db/encyclopedia";
export default defineEventHandler(async (evnet) => {
  const pagination = paginationHelper(evnet);
  const { list, total } = await getEncyclopediaPage({
    pagination,
  });
  return {
    list,
    total,
  };
});

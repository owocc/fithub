import { getEncyclopediaList } from "../../db/encyclopedia";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { list, total } = await getEncyclopediaList({query});
  return {
    list,
    total,
  };
});
